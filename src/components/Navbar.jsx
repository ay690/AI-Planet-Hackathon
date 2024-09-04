import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between py-4 mx-auto max-w-7xl">
        <Link to="/hackathon">
          <img
            src={Logo}
            alt="logo pic"
            className="w-auto h-auto"
            loading="lazy"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
