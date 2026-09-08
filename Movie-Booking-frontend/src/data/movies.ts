export type Movie = {
  id: string;
  title: string;
  language: string;
  runtime: string;
  poster: string;
  rating: number;
  showtimes:string[];
};


export type Seat = {
  id: string;
  status: "available" | "selected" | "booked";
};
