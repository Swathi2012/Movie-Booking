import express from "express";
import cors from "cors";
import moviesRoute from "./routes/moviesRoute";
 
const app = express();
 
app.use(cors());
app.use(express.json());
 
app.use("/api/movies", moviesRoute);
 
const PORT = 5001;
 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 