// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GetInTouchIcon({ icon, styles }) {
  return (
    <div>
      <a href="" className={styles.iconLink}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </a>
    </div>
  );
}
