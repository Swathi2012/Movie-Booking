
import { MdCameraRoll } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FcHome } from "react-icons/fc";
import { RiMovie2AiFill } from "react-icons/ri";

import { useAppSelector } from "../hooks/reduxHooks";

import "./Header.css";

type HeaderProps = {
  onCartClick: () => void;
  onHomeClick: () => void;
  onMoviesClick: () => void;
};

const Header = ({ onCartClick, onHomeClick, onMoviesClick }: HeaderProps) => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const cartCount = cartItems.length;

  return (
    <header className="header">
      <div className="logo-section">
        <h1 className="header-title" onClick={onHomeClick}>
          <MdCameraRoll className="logo-icon" />
          CineBoook
        </h1>
      </div>

      <nav className="nav-menu">
        <span className="nav-item" onClick={onHomeClick}>
          <FcHome className="nav-icon" />
          <span>Home</span>
        </span>

        <span className="nav-item" onClick={onMoviesClick}>
          <RiMovie2AiFill className="nav-icon movie-icon" />
          <span>Movies</span>
        </span>

        <span className="nav-item cart-item" onClick={onCartClick}>
          <CiShoppingCart />

          <span>Cart</span>

          <span className="cart-badge">{cartCount}</span>
        </span>
      </nav>
    </header>
  );
};

export default Header;
