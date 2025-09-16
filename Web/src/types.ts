export interface PaketListItem {
  paket_id: number;
  trackingNumber: string;
  car: string;
  driver: string;
  status: "Levererad" | "På väg" | "Försenad";
}
