import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import { useState } from "react";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";
import QuickViewtModal from "@/components/modals/quickViewModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const RelatedProduct = ({
  productData,
  slug,
  baseUrl,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
}) => {
  let badgeText = "";

  if (productData.rent) {
    badgeText = "For Rent";
  } else {
    badgeText = "For Sale";
  }
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const wishListTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Wishlist
    </Tooltip>
  );
  const quickViewTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Quick View
    </Tooltip>
  );
  const addToCartTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add To Cart
    </Tooltip>
  );
  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          <Link href={`/${baseUrl}/${slug}`}>
            <img
              src={`/img/product-3/${productData.productImg}`}
              alt={`${productData.title}`}
              className="product-latest-img"
            />
          </Link>
          <div className="real-estate-agent">
            <div className="agent-img">
              <Link href={`/${baseUrl}/${slug}`}>
                <img
                  src={`/img/blog/author.jpg`}
                  alt={`${productData.title}`}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-badge">
            <ul>
              <li
                className={`sale-badge text-white`}
                style={{ backgroundColor: "#01356d" }}
              >
                {productData.projectType}
              </li>
            </ul>
          </div>
          <h2 className="product-title">
            <Link href={`/${baseUrl}/${slug}`}>{productData.title}</Link>
          </h2>
          <div className="product-img-location">
            <ul>
              <li
                className="d-flex gap-2 align-items-center"
                style={{ color: "#9b2727", fontWeight: "600" }}
              >
                {/* <Link href={`/${baseUrl}/${slug}`}> */}
                <i className="flaticon-pin"></i>
                {productData.locantion}
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <ul className="ltn__plot-brief" style={{ color: "#111111" }}>
            <li className="d-flex justify-content-between mt-3 me-0">
              <span className="" style={{ fontWeight: "400" }}>
                Developer:
              </span>
              <span className="" style={{ fontWeight: "700" }}>
                {productData.developer}
              </span>
            </li>
            {/* <li className="d-flex justify-content-between mt-2 me-0">
              <span className="">Project Type:</span>
              <span className="" style={{ fontWeight: "800" }}>
                {productData.projectType}
              </span>
            </li> */}
            <li className="d-flex justify-content-between mt-1 me-0">
              <span className="" style={{ fontWeight: "400" }}>
                Payment Plan:
              </span>
              <span className="" style={{ fontWeight: "700" }}>
                {productData.paymentPlan}
              </span>
            </li>
            <li className="d-flex justify-content-between mt-1 me-0">
              <span className="" style={{ fontWeight: "400" }}>
                Handover Date:
              </span>
              <span className="" style={{ fontWeight: "700" }}>
                {productData.handoverDate}
              </span>
            </li>
          </ul>
          {/* <div className="product-hover-action">
            <ul>
              <li>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={quickViewTooltip}
                >
                  <button onClick={() => setModalShow(true)}>
                    <i className="flaticon-expand"></i>
                  </button>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={wishListTooltip}
                >
                  <button
                    onClick={
                      wishlistItem !== undefined
                        ? () => dispatch(deleteFromWishlist(productData.id))
                        : () => dispatch(addToWishlist(productData))
                    }
                  >
                    <i className="flaticon-heart-1"></i>
                  </button>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={addToCartTooltip}
                >
                  <button onClick={() => dispatch(addToCart(productData))}>
                    <i className="flaticon-add"></i>
                  </button>
                </OverlayTrigger>
              </li>
            </ul>
          </div> */}
        </div>
        <div
          className="product-info-bottom"
          style={{ backgroundColor: "#9b2727" }}
        >
          <div className="product-price">
            <span className="text-white">
              {/* {`$ ${productData.price}`} */}
              {/* <label>/Month</label> */}
              {productData.amount}
            </span>
          </div>
        </div>
      </div>

      <QuickViewtModal
        productData={productData}
        show={modalShow}
        onHide={() => setModalShow(false)}
        slug={slug}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      />
    </>
  );
};

export default RelatedProduct;
