// React
import { Link, NavLink } from "react-router";

// Must match index.css 'blue' colour
const linkColour = "#0355cc";

export default function Navigation({ styles }) {
  return (
    <nav className={["navbar", "navbar-expand-lg", styles.nav].join(" ")}>
      <Link to="/" className="navbar-brand">
        <span className={styles.inanceText}>Inance</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className={styles.navTogglerSpan}> </span>
      </button>
      <div
        className={["collapse", "navbar-collapse"].join(" ")}
        id="navbarSupportedContent"
      >
        <menu className={["navbar-nav", styles.navbarNav].join(" ")}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={[styles.menuLinks, "nav-link"].join(" ")}
              style={({ isActive }) => ({
                color: isActive ? linkColour : "",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={[styles.menuLinks, "nav-link"].join(" ")}
              style={({ isActive }) => ({
                color: isActive ? linkColour : "",
              })}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={[styles.menuLinks, "nav-link"].join(" ")}
              style={({ isActive }) => ({
                color: isActive ? linkColour : "",
              })}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              className={[styles.menuLinks, "nav-link"].join(" ")}
              style={({ isActive }) => ({
                color: isActive ? linkColour : "",
              })}
            >
              Contact Us
            </NavLink>
          </li>
        </menu>
      </div>
    </nav>
  );
}
