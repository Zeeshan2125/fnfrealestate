import Link from "next/link";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getProductCartQuantity } from "@/lib/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";
import { addToCompare, deleteFromCompare } from "@/store/slices/compare-slice";

import {
  FaShoppingBag,
  FaRegHeart,
  FaExchangeAlt,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaFacebookF,
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPencilAlt,
} from "react-icons/fa";
import ProductRating from "../product/ProductRating";

const QuickViewModal = ({
  productData,
  onHide,
  show,
  slug,
  discountedprice,
  productprice,
  wishlistitem,
  compareitem,
}) => {
  const modalClose = () => {
    onHide();
  };

  const dispatch = useDispatch();

  return (
    <Modal
      show={show}
      onHide={modalClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      className="ltn__modal-area ltn__quick-view-modal-area"
    >
      <Modal.Header>
        <Button className="close" variant="secondary" onClick={modalClose}>
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#01356d" }}>
        <div className="ltn__contact-message-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__form-box contact-form-box box-shadow px-0 pb-0 pt-4">
                  <h4 className="title-2 text-white">Download Brochure</h4>
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
                        Submit
                      </button>
                    </div>
                    <p className="form-messege mb-0 mt-20"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default QuickViewModal;
