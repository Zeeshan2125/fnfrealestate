import { Form } from "react-bootstrap";
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCheck,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaComments,
  FaPhoneAlt,
  FaArrowDown,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* <!-- CONTACT ADDRESS AREA START --> */}
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/10.png" alt="Icon Image" />
                </div>
                <h3>Email Address</h3>
                <p>admin@fnfrealestate.com</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/12.png" alt="Icon Image" />
                </div>
                <h3>Office Address</h3>
                <p>
                  Office No. 1011, Clover Bay Tower - Marasi Dr - Business Bay -
                  Dubai - United Arab Emirates
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/11.png" alt="Icon Image" />
                </div>
                <h3>Phone Number</h3>
                <p>04 3471009</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT ADDRESS AREA END --> */}

      {/* <!-- CONTACT MESSAGE AREA START --> */}
      <div className="ltn__contact-message-area mb-120 mb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="ltn__form-box contact-form-box box-shadow"
                style={{ backgroundColor: "#01356d" }}
              >
                <h4 className="title-2 text-white">Let&apos;s Connect</h4>
                <form id="contact-form" action="#" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                        />
                        <span className="inline-icon">
                          <FaUserAlt />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                        />
                        <span className="inline-icon">
                          <FaEnvelope />
                        </span>
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="input-item input-item input-item-email ltn__custom-icon">
                        <Form.Select className="nice-select">
                          <option>Select Service Type</option>
                          <option>Property Management </option>
                          <option>Mortgage Service </option>
                          <option>Consulting Service</option>
                          <option>Home Buying</option>
                          <option>Home selling</option>
                          <option>Escrow Services</option>
                        </Form.Select>
                        <span className="inline-icon">
                          <FaArrowDown />
                        </span>
                      </div>
                    </div> */}
                    <div className="col-md-12">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter phone number"
                        />
                        <span className="inline-icon">
                          <FaPhoneAlt />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                      name="message"
                      placeholder="Enter message"
                      className="text-white"
                    ></textarea>
                    <span className="inline-icon">
                      <FaPencilAlt />
                    </span>
                  </div>
                  {/* <p>
                    <label className="input-info-save mb-0 text-white">
                      <input type="checkbox" name="agree" /> Save my name,
                      email, and website in this browser for the next time I
                      comment.
                    </label>
                  </p> */}
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                  <p className="form-messege mb-0 mt-20"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT MESSAGE AREA END --> */}

      {/* <!-- GOOGLE MAP AREA START --> */}
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.050931820203!2d55.2733858751094!3d25.18504983169096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f693afb4babe9%3A0xdda585df6ed9b8ae!2sClover%20Bay%20Tower!5e0!3m2!1sen!2s!4v1708700000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* <!-- GOOGLE MAP AREA END --> */}
    </>
  );
};

export default Contact;
