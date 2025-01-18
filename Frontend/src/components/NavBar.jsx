import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  const navLinks = [
    { to: "/", icon: "fa-solid fa-house", label: "Home" },
    { to: "/rooms", icon: "fa-solid fa-bed", label: "Rooms" },
    { to: "/booking", icon: "fa-solid fa-calendar-check", label: "Booking" },
    { to: "/services", icon: "fa-solid fa-concierge-bell", label: "Services" },
    { to: "/events", icon: "fa fa-calendar-check", label: "Events" },
    { to: "/contact", icon: "fa-solid fa-envelope", label: "Contact" },
    { to: "/login", icon: "fa-solid fa-right-to-bracket", label: "Login" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navLinks.map(({ to, icon, label }) => (
          <li key={to} className="nav-item">
            <NavLink to={to} end={to === "/"} className={({ isActive }) => (isActive ? "active" : "")}>
              <i className={icon} aria-hidden="true"></i>
              <span className="nav-label">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
