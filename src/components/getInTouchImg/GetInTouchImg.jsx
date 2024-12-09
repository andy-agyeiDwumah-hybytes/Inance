// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GetInTouchImg({ icon, styles, children, dataContent }) {
  return (
    <div className={["col-md-4", styles.imgWrapper].join(" ")} data-content={dataContent}>
      <div className={styles.item}>
        <a href="">
          <div className={styles.imgBox}>
            <FontAwesomeIcon icon={icon} className={styles.imgIcon} />
          </div>
        </a>
        <p className={styles.imgIconText}>{children}</p>
      </div>
    </div>
  );
}
