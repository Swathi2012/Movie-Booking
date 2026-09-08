import { useNavigate } from "react-router-dom";
import "./HomeContent.css";
function HomeContent() {
  const navigate=useNavigate();
  return (
    <div className="home-content">
      <h2 className="home-title">Welcome to CineBook</h2>

      <p className="home-description">
        Book your favorite movies online. Select your seats and enjoy the show.
      </p>
      <button className="browse-movies-button" onClick={()=>navigate("/movies")}>
        Browse Movies
      </button>
    </div>
  );
}

export default HomeContent;
