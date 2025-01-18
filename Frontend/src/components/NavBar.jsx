import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  const navLinks = [
    { to: "/", icon: "fa-solid fa-house", label: "Home" },
    { to: "/menu", icon: "fa-solid fa-utensils", label: "Menu" },
    { to: "/event", icon: "fa fa-calendar-check", label: "Event" },
    { to: "/room", icon: "fa fa-door-open", label: "Room" },
    { to: "/service", icon: "fa-solid fa-bed", label: "Service" },
    { to: "/booking", icon: "fa-solid fa-calendar-check", label: "Booking" },
    { to: "/login", icon: "fa-solid fa-right-to-bracket", label: "Login" },
  ];
  
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navLinks.map(({ to, icon, label }) => (
          <li key={to} className="nav-item">
            <NavLink to={to} end={to === "/"} className="nav-link" activeClassName="active">
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
