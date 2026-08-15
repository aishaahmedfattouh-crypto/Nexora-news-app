import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

const navigation = [
  { label: "Home", path: "/" },
  { label: "AI", path: "/category/ai" },
  { label: "Web", path: "/category/web" },
  {
    label: "Cybersecurity",
    path: "/category/cybersecurity",
  },
  {
    label: "Startups",
    path: "/category/startups",
  },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__container">

        {/* Logo */}
        <Link to="/" className="navbar__brand">
          <span className="navbar__mark">N</span>

          <span className="navbar__name">
            Nexora
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className="navbar__navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `navbar__link ${
                  isActive
                    ? "navbar__link--active"
                    : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">

          {/* Search */}
          <Link
            to="/search"
            className="navbar__icon-button"
            aria-label="Search"
          >
            <span aria-hidden="true">⌕</span>
          </Link>

          {/* Saved Stories */}
          <Link
            to="/saved"
            className="navbar__icon-button"
            aria-label="Saved stories"
          >
            <span aria-hidden="true">♡</span>
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            className="navbar__menu-button"
            aria-label="Open navigation menu"
          >
            <span />
            <span />
            <span />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;