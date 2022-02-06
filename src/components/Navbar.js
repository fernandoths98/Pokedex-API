import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img src="/pokemon-logo.png" alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
