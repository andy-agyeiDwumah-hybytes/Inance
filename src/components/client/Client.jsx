// Components
import ClientInfo from "../clientInfo/ClientInfo";
// Images
import clientOneImg from "../../assets/client-1.jpg"
import clientTwoImg from "../../assets/client-2.jpg"
// Styles
import styles from "./Client.module.css"
// Owl Carousel
import ReactOwlCarousel from "react-owl-carousel";
// Font Awesome
// import { faLongArrowRight, faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Client() {
    // Options for owl carousel
    const options = {
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
    //   navText: [
    //     <FontAwesomeIcon key="left" icon={faLongArrowLeft} />,
    //     <FontAwesomeIcon key="right" icon={faLongArrowRight} />,
    //   ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 2 },
      },
    };

  return (
    <section className="client_section">
      <div className="container">
        <div className={["heading_container", "heading_center", styles.headingContainer].join(" ")}>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="carousel-wrap layout_padding2-top">
          <ReactOwlCarousel className="owl-carousel" {...options} >
            <ClientInfo imgSrc={clientOneImg} name="Jorch morik" numOfStars={5} styles={styles}>
              chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum
            </ClientInfo>
            <ClientInfo imgSrc={clientTwoImg} name="Jorch morik" numOfStars={5} styles={styles}>
              chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum
            </ClientInfo>
            <ClientInfo imgSrc={clientOneImg} name="Jorch morik" numOfStars={5} styles={styles}>
              chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum
            </ClientInfo>
            <ClientInfo imgSrc={clientTwoImg} name="Jorch morik" numOfStars={5} styles={styles}>
              chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum
            </ClientInfo>
          </ReactOwlCarousel>
        </div>
      </div>
    </section>
  );
}
