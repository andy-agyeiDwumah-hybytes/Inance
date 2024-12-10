// Paths
import {
  pathData1,
  pathData2,
  pathData3,
  pathData4,
  pathData5,
  pathData6,
  pathData7,
  pathData8,
} from "../../paths/PathData";
// Components
import Path from "../path/Path";
// Styles
import styles from "./Feature.module.css"

export default function Feature() {
  return (
    <section className={["feature_section", styles.section].join(" ")}>
      <div className="container">
        <div
          className={["feature_container", styles.featureContainer].join(" ")}
        >
          <div className={["box", styles.box].join(" ")}>
            <div className={["img-box", styles.imgBox].join(" ")}>
              <svg
                enableBackground="new 0 0 511.995 511.995"
                height="512"
                viewBox="0 0 511.995 511.995"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
              >
                <g>
                  <g>
                    <Path d={pathData1} styles={styles} />
                    <Path d={pathData2} styles={styles} />
                    <Path d={pathData3} styles={styles} />
                    <Path d={pathData4} styles={styles} />
                  </g>
                </g>
              </svg>
            </div>
            <h5 className={["name", styles.name].join(" ")}>Repair</h5>
          </div>
          <div className={["box", "active", styles.box, styles.active].join(" ")}>
            <div className={["img-box", styles.imgBox].join(" ")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="512"
                height="512"
                className={styles.svg}
              >
                <g
                  id="paint-painted-paint_roller-home-house"
                  data-name="paint-painted-paint roller-home-house"
                >
                  <Path d={pathData5} styles={styles} />
                </g>
              </svg>
            </div>
            <h5 className={["name", styles.name].join(" ")}>Improve</h5>
          </div>
          <div className={["box", styles.box].join(" ")}>
            <div className={["img-box", styles.imgBox].join(" ")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="512"
                height="512"
                className={styles.svg}
              >
                <Path d={pathData6} styles={styles} />
                <Path d={pathData7} styles={styles} />
                <Path d={pathData8} styles={styles} />
              </svg>
            </div>
            <h5 className={["name", styles.name].join(" ")}>Maintain</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
