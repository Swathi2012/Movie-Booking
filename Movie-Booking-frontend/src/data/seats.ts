import type { Seat } from "./movies";

export const defaultSeats: Seat[] = [
  { id: "A1", status: "available" },
  { id: "A2", status: "available" },
  { id: "A3", status: "booked" },
  { id: "A4", status: "available" },
  { id: "A5", status: "available" },

  { id: "B1", status: "available" },
  { id: "B2", status: "booked" },
  { id: "B3", status: "available" },
  { id: "B4", status: "available" },
  { id: "B5", status: "available" },

  { id: "C1", status: "available" },
  { id: "C2", status: "available" },
  { id: "C3", status: "booked" },
  { id: "C4", status: "available" },
  { id: "C5", status: "available" },

  { id: "D1", status: "available" },
  { id: "D2", status: "available" },
  { id: "D3", status: "available" },
  { id: "D4", status: "booked" },
  { id: "D5", status: "available" },
];