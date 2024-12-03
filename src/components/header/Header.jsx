// Styles
import styles from "./Header.module.css"
// React router
import { Link, NavLink } from "react-router";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Must match index.css 'blue' colour
const linkColour = "#0355cc";

export default function Header() {
  return (
    <header>
      <div className={styles.top}>
        <Link to="/">
          <FontAwesomeIcon
            icon={faPhone}
            className={styles.headerIcon}
          ></FontAwesomeIcon>
          &nbsp;Call : +01 123455678990
        </Link>
        <Link to="/">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles.headerIcon}
          ></FontAwesomeIcon>
          &nbsp;Email : demo@gmail.com
        </Link>
      </div>
      <div className={styles.bottom}>
        <Link to="/">Inance</Link>
        <menu className={styles.headerMenu}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? linkColour : "",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? linkColour : "",
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? linkColour : "",
              })}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              style={({ isActive }) => ({
                color: isActive ? linkColour : "",
              })}
            >
              Contact Us
            </NavLink>
          </li>
        </menu>
      </div>
    </header>
  );
}
