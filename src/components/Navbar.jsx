import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Writing", to: "/writing" },
    { label: "Acting", to: "/acting" },
    { label: "Gallery", to: "/gallery" },
    { label: "Reviews", to: "/reviews" },
    { label: "News", to: "/news" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="site-header">
      <div className="site-brand">
        <NavLink to="/">Pablo Munoz-Evers</NavLink>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
