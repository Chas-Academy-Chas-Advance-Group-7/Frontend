import React, { useEffect, useMemo, useRef, useState } from "react";

type Pkg = {
  id: string;
  temperature: string; 
  humidity: string;  
  status: string;
};
type Warning = {
  key: string;
  pkgId: string;
  message: string;
};
type Props = {
  packagesUrl?: string;
  tempThreshold?: number;
  humidityThreshold?: number;
  pollMs?: number;
};

function toNumber(value: string | number): number {
  if (typeof value === "number") return value;
  const cleaned = value.replace(/[^\d.\-]/g, "");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : NaN;
}

export const Warnings: React.FC<Props> = ({
  packagesUrl = "/packages",
  tempThreshold = 6,
  humidityThreshold = 60,
  pollMs = 10000,
}) => {
  const [packages, setPackages] = useState<Pkg[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const timerRef = useRef<number | null>(null);

  const fetchPackages = async (signal?: AbortSignal) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(packagesUrl, { signal });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} – kunde inte hämta paket`);
      }
      const data = (await res.json()) as Pkg[] | { packages: Pkg[] };
      const list = Array.isArray(data) ? data : data.packages ?? [];
      setPackages(list);
    } catch (e: any) {
      if (e?.name !== "AbortError") {
        setError(e?.message ?? "Något gick fel vid hämtning");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchPackages(controller.signal);

    if (pollMs && pollMs > 0) {
      timerRef.current = window.setInterval(() => {
        const c = new AbortController();
        fetchPackages(c.signal);
      }, pollMs);
    }

    return () => {
      controller.abort();
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [packagesUrl, pollMs]);

  const warnings: Warning[] = useMemo(() => {
    if (!packages) return [];
    const out: Warning[] = [];
    for (const pkg of packages) {
      const t = toNumber(pkg.temperature);
      const h = toNumber(pkg.humidity);

      if (!Number.isNaN(t) && t > tempThreshold) {
        out.push({
          key: `${pkg.id}-temp`,
          pkgId: pkg.id,
          message: `Paket ${pkg.id}: För hög temperatur (${t}°C)`,
        });
      }
      if (!Number.isNaN(h) && h > humidityThreshold) {
        out.push({
          key: `${pkg.id}-hum`,
          pkgId: pkg.id,
          message: `Paket ${pkg.id}: För hög luftfuktighet (${h}%)`,
        });
      }
    }
    return out;
  }, [packages, tempThreshold, humidityThreshold]);

  return (
    <aside
      style={{
        padding: "1rem",
        background: "#fff",
        textAlign: "center",           
      }}
    >
      <h2 style={{ marginTop: 0, display: "flex", justifyContent: "center", color: "#036",}}>⚠️ Varningar</h2>

      {loading && <p>Hämtar paket…</p>}
      {error && (
        <p style={{ color: "#ef0202" }}>
          Kunde inte hämta data: {error}
        </p>
      )}

      {!loading && !error && (
        <>
          {warnings.length === 0 ? (
            <p style={{ color: "green", margin: 0 }}>
              ✅ Inga varningar — alla paket är inom säkra nivåer.
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0,}}>
              {warnings.map((w) => (
                <li
                  key={w.key}
                  style={{
                    color: "#ef0202",
                    padding: "0.5rem 0.75rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {w.message}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </aside>
  );
};
