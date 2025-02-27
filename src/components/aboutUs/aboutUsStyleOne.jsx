import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className="about-us-img-wrap about-img-left">
                <img
                  src="/img/others/7.png"
                  alt="About Us Image"
                  style={{ borderRadius: "12px" }}
                />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  {/* <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/8.png" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} style={{ alignSelf: "center" }}>
              <div className="about-us-info-wrap">
                <div className="section-title-area m-0">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    FNF, Turning Your Dream into Reality<span>.</span>
                  </h1>
                  <p>
                    Begin your journey with FNF and develop your dream and
                    vision into a reality. Our service is crafted to support
                    your unique needs, ensuring that your property journey is
                    successful and aligned with your goals.
                  </p>
                  <p>
                    We provide tailored advice and solutions to ensure your
                    investment aligns perfectly with your vision whether you’re
                    searching for a dream home, a lucrative investment, or a
                    prime commercial space, we’re here to turn your aspirations
                    into reality. We offer exceptional services for those
                    looking to invest, buy, sell, or rent residential and
                    commercial properties within the luxurious landscape of the
                    United Arab Emirates.
                  </p>
                  <p>FNF, Turning your dream into reality.</p>
                </div>
                {/* <div className="btn-wrapper animated">
                  <Link
                    href="/service"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    More About Us
                  </Link>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
