// Images
import aboutImg from "../../assets/about-img.jpg"

export default function About() {
  return (
    <section className="layout_padding">
      <div className="container">
        <div className="row about-row">
          <div className="col-lg-5 col-md-6">
            <div className="about-section-detail-box">
              <h2 className="about-h2">About us</h2>
              <p className="about-para">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomisedThere are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised
              </p>
              <a href="" className="about-link">Read More</a>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-img-box">
              <img src={aboutImg} alt="" className="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
