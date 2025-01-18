import { NavLink } from 'react-router-dom';
import '../css/Aside.css';

const Aside = () => {
  const asideLinks = [
    { to: "/about", label: "About Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/faq", label: "FAQ" },
    { to: "/policies", label: "Policies" },
    { to: "/blog", label: "Blog" },
    { to: "/careers", label: "Careers" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" },
  ];

  return (
    <aside className="aside">
      <ul className="aside-nav">
        {asideLinks.map(({ to, label }) => (
          <li key={to} className="aside-item">
            <NavLink to={to} className="aside-link" activeClassName="active">
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;