// Components
import GetInTouchIcon from "../getInTouchIcon/GetInTouchIcon";
// Styles
import styles from "./GetInTouch.module.css"
// Fontawesome
import { faFacebookF, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function GetInTouch() {
  return (
    <section className={styles.infoSection}>
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className={styles.infoItems}>
              <div className="row">
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className={styles.socialBox}>
            <h4 className={styles.h4}>Follow Us</h4>
            <div className={styles.box}>
              <GetInTouchIcon icon={faFacebookF} styles={styles} />
              <GetInTouchIcon icon={faTwitter} styles={styles} />
              <GetInTouchIcon icon={faYoutube} styles={styles} />
              <GetInTouchIcon icon={faInstagram} styles={styles} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}