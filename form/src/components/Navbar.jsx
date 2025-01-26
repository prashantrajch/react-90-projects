import { FaWpforms } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <FaWpforms />
      </div>
      <nav className="nav">
        <ul className="navbar">
          <li className="navlist">
            <a href="" className="nav-link active">
              Home
            </a>
          </li>
          <li className="navlist">
            <a href="" className="nav-link">
              Contact Us
            </a>
          </li>
          <li className="navlist">
            <a href="" className="nav-link">
              About Us
            </a>
          </li>
          <li className="navlist">
            <a href="" className="nav-link">
              Services Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
