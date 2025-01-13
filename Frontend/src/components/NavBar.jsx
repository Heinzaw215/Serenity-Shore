import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    { to: "/", icon: "fa-solid fa-house", label: "Home" },
    { to: "/menu", icon: "fa-solid fa-utensils", label: "Menu" },
    { to: "/service", icon: "fa-solid fa-bed", label: "Service" },
    { to: "/booking", icon: "fa-solid fa-calendar-check", label: "Booking" },
    { to: "/login", icon: "fa-solid fa-right-to-bracket", label: "Login" },
  ];
  return (
    <nav>
      {navLinks.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
        >
          <i className={icon}></i> {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
