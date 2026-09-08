export type Movie = {
  id: string;
  title: string;
  language: string;
  runtime: string;
  poster: string;
  rating: number;
  showtimes:string[];
};
 
export  const movies: Movie[] = [
  {
    id: "1",
    title: "Leo",
    language: "Tamil",
    runtime: "164 min",
    poster: "/images/leo.jpg",
    rating: 9,
    showtimes : ["10:00 AM", "2:00 PM", "6:00 PM", "9:30 PM"],
  },
  {
    id: "2",
    title: "Jailer",
    language: "Tamil",
    runtime: "168 min",
    poster: "/images/jailer.jpg",
    rating: 8.2,
    showtimes :["11:00 AM", "2:30 PM", "6:30 PM", "10:00 PM"],
  },
  {
    id: "3",
    title: "GOAT",
    language: "Tamil",
    runtime: "183 min",
    poster: "/images/goat.jpg",
    rating: 7.9,
    showtimes :["10:30 AM", "3:00 PM", "7:00 PM", "10:30 PM"],
  },
];
 