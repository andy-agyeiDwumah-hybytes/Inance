// Styles
import styles from "./Header.module.css"
// React router
import { Link } from "react-router";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../navigation/Navigation";


export default function Header() {
  return (
    <header className="header_section">
      <div className={styles.top}>
        <div className="container-fluid">
          <div className={["contact_nav", styles.contactNav].join(" ")}>
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
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container-fluid">
          <Navigation styles={styles} />
        </div>
      </div>
    </header>
  );
}
