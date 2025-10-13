import { useState, ChangeEvent, FormEvent } from "react";
import "../index.css";

type Driver = {
  id?: number;
  truck_id: number;
  name: string;
  email: string;
  password: string;
  location: string;
};

export default function AddDriverForm() {
  const [formData, setFormData] = useState<Driver>({
    truck_id: 0,
    name: "",
    email: "",
    password: "",
    location: ""
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "truck_id" ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/drivers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setSuccessMessage("✅ Chaufför tillagd!");
      setFormData({
        truck_id: 0,
        name: "",
        email: "",
        password: "",
        location: ""
      });
      setTimeout(() => setSuccessMessage(null), 3000);
    } else {
      setSuccessMessage("❌ Ett fel uppstod – kunde inte lägga till chaufför.");
    }
  };

  return (
    <div className="driver-container">
      <div className="driver-image">
        <img
          src="/truck_logo.png"
          alt="Truck"
        />
      </div>

      <div className="driver-form">
        <h2>Lägg till chaufför</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Truck ID</label>
            <input
              type="number"
              name="truck_id"
              value={formData.truck_id}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Namn</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Lösenord</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Plats</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Spara
            </button>
          </div>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}
