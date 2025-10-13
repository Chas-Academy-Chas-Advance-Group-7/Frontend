export interface PaketListItem {
  paket_id: number;
  trackingNumber: string;
  car: string;
  driver: string;
  status: "Levererad" | "På väg" | "Försenad";
}

export type Driver = {
  id?: number;
  truck_id: number;
  name: string;
  email: string;
  password: string;
  location: string;
};

