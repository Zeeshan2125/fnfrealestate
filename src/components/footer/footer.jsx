import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = function () {
  return (
    <>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area  ">
        <div
          className="footer-top-area  section-bg-2 plr--5"
          style={{ backgroundColor: "#01356d" }}
        >
          <Container fluid>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-about-widget footer-logo-box">
                  <div className="footer-logo">
                    <div className="footer-site-logo">
                      {/* <img src="/img/logo.png" alt="Logo" /> */}
                      <img src="/img/logo-2.png" alt="Logo" />
                    </div>
                  </div>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum is dummy text of the printing. Lorem
                    Ipsum is simply dummy text of the and typesetting industry.
                    Lorem Ipsum is dummy text of the printing.
                  </p> */}
                  <div className="">
                    <h2
                      className="slide-sub-title mb-1 footer-fnf-h2"
                      style={{ color: "#ffffff" }}
                    >
                      Facts and Figures
                    </h2>
                    <h5
                      className="slide-sub-title mb-0 footer-fnf-p"
                      style={{ color: "#ffffff", fontWeight: "400" }}
                    >
                      Business with no complaints
                    </h5>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/shop/grid">Projects</Link>
                      </li>
                      {/* <li>
                        <Link href="/blog/grid">News</Link>
                      </li> */}
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                      {/* <li>
                        <Link href="/shop">All Products</Link>
                      </li>
                      <li>
                        <Link href="/locations">Locations Map</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Get In Touch</h4>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            Office No. 1011, Clover Bay Tower - Marasi Dr -
                            Business Bay - Dubai - United Arab Emirates
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>+0123-456789</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaEnvelope />
                        </div>
                        <div className="footer-address-info">
                          <p>admin@fnfrealestate.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h5 className="mt-30">Follow On</h5>
                  <div className="ltn__social-media">
                    <ul>
                      <li>
                        <Link href="#" title="Facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Linkedin">
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Youtube">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Location</h4>
                  {/* <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p> */}
                  {/* <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          {" "}
                          <FaPaperPlane />
                        </button>
                      </div>
                    </form>
                  </div> */}
                  {/* <img src="/img/icons/payment-4.png" alt="Payment Image" /> */}
                  {/* <h5 className="mt-30">Location</h5> */}
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.050931820203!2d55.2733858751094!3d25.18504983169096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f693afb4babe9%3A0xdda585df6ed9b8ae!2sClover%20Bay%20Tower!5e0!3m2!1sen!2s!4v1708700000000"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5"
          style={{ backgroundColor: "#034e9e" }}
        >
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={12}>
                <div className="ltn__copyright-design clearfix text-center">
                  <p>
                    All Rights Reserved @{" "}
                    <span className="copyright-font">Facts and Figures</span>
                    <span className="current-year"></span>
                  </p>
                </div>
              </Col>
              {/* <Col xs={12} md={6} className="align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <ul>
                    <li>
                      <Link href="#">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Claim</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy & Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col> */}
            </Row>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER AREA END --> */}
    </>
  );
};

export default Footer;
