import path from "path";
import fs from "fs/promises";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPencilAlt,
  FaPhoneAlt,
  FaArrowDown,
  FaEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import HeroSectionStyleOne from "@/components/hero/styleOne";
import CarDealerSearchForm from "@/components/carDealerSearchForm";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import AboutUsStyleTwo from "@/components/aboutUs/aboutUsStyleTwo";
import CounterUp from "@/components/counterUp";
import Feature from "@/components/features";
import TitleSection from "@/components/titleSection";
import ProductItem from "@/components/product";
import CallToAction from "@/components/callToAction";
import VideoBanner from "@/components/banner/videoBanner";
import aminitiesData from "@/data/aminities/index.json";
import AminitiesItem from "@/components/aminities/item";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import featuresData from "@/data/service";
import { useEffect, useState } from "react";
import { title } from "process";
import TeamItem from "@/components/team";
import TeamData from "@/data/team";
import IntroAnimation from "@/components/IntroAnimation";
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";

function HomePage(props) {
  const [showAnimation, setShowAnimation] = useState(false);
  const { products } = useSelector((state) => state.product);

  const featuredProducts = getProducts(products, "buying", "featured", 6);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
  const agents = getProducts(TeamData, "buying", "featured", 6);
  const { Herodata } = props;

  const vision = [
    {
      title: "Our Vision",
      shortDescription:
        `At Facts and Figures real estate we envision becoming the premier real estate marketing
powerhouse in Dubai, seamlessly connecting investors and homebuyers across the Gulf region and
the world..
Our goal is to revolutionize property marketing by leveraging cutting-edge digital strategies, AI-driven
insights, and an unparalleled network of elite developers. We aim to provide an immersive, data-
driven, and customer-centric experience that empowers clients to make informed real estate
decisions with confidence.
Whether you’re seeking a dream home, a high-yield investment, or a strategic business property, our
platform is designed to showcase Dubai’s vibrant real estate landscape like never before.
Join us in shaping the future of real estate marketing, where innovation meets excellence.`,
      icon: "/img/vision.png",
    },
    {
      title: "Our Mission",
      shortDescription:
        `At Facts and Figures real estate, our mission is to redefine real estate marketing in Dubai by
delivering innovative, data-driven, and customer-focused solutions that connect buyers, investors,
and developers across the Gulf region and the world.
We strive to provide a seamless, transparent, and engaging property discovery experience through
cutting-edge digital marketing, immersive virtual tours, and AI-powered insights. Our goal is to
showcase the finest real estate opportunities, empowering clients to make informed investment
decisions with confidence.
With a commitment to excellence, trust, and innovation, we aim to be the go-to platform for anyone
looking to explore Dubai’s dynamic real estate market and beyond.`,
      icon: "/img/mission.png",
    },
  ];

  const sliderData = [
    {
      image: "/img/fnf-home.png",
    },
    {
      image: "/img/fnf-home2.png",
    },
    {
      image: "/img/fnf-home3.png",
    },
    {
      image: "/img/fnf-home9.png",
    },
    {
      image: "/img/fnf-home4.png",
    },
    {
      image: "/img/fnf-home5.png",
    },
    {
      image: "/img/fnf-home6.png",
    },
    {
      image: "/img/fnf-home7.png",
    },
  ];

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );
  const productCarouselsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("seenIntroAnimation");
    if (!hasSeenAnimation) {
      setShowAnimation(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem("seenIntroAnimation", "true");
    setShowAnimation(false);
  };

  if (showAnimation) {
    return <IntroAnimation onComplete={handleAnimationComplete} />;
  }

  return (
    <>
      <LayoutOne topbar={true}>
        <HeroSectionStyleOne data={sliderData} />

        {/* <CarDealerSearchForm navMenuClass="d-none" customClasses="" /> */}
        {/* <!-- CAR DEALER FORM AREA END -->

      <!-- ABOUT US AREA START --> */}
        <AboutUsStyleOne sectionSpace="pt-120" />
        <div>
          <Container>
            <div className="ltn__team-area pt-115 pb-90">
              <Row>
                <Col lg={12}>
                  <TitleSection
                    sectionClasses="text-center"
                    headingClasses="section-subtitle-2 text-black"
                    titleSectionData={{
                      subTitle: "Our Team",
                      title: "Meet Our Wonderful Team",
                    }}
                    white={false}
                  />
                </Col>
              </Row>
              <Row>
                <Slider
                  {...testiMonialsettings}
                  className="ltn__testimonial-slider-5-active slick-arrow-1"
                >
                  {agents.map((data, key) => {
                    const slug = productSlug(data.name);
                    return (
                      // <Col key={key} xs={12} sm={6} lg={4} >
                      <TeamItem
                        key={key}
                        baseUrl="blog"
                        data={data}
                        slug={slug}
                        additionalClassname=""
                        white={false}
                      />
                      // </Col>
                    );
                  })}
                  {/* {testimonialData.map((data, key) => {
                  return <TestimonialCarouselItem key={key} data={data} />;
                })} */}
                </Slider>
                {/* {agents.map((data, key) => {
                const slug = productSlug(data.name);
                return (
                  <Col key={key} xs={12} sm={6} lg={4} >
                    <TeamItem baseUrl="blog" data={data} slug={slug} additionalClassname="" />
                  </Col>
                );
              })} */}
              </Row>
            </div>
          </Container>
        </div>
        <Feature
          classes="section-bg-1"
          servicebtn={true}
          imageTag={true}
          data={vision}
          white={true}
          headingClasses="section-subtitle-2"
          titleSectionData={{
            sectionClasses: "text-center",
            subTitle: "Core Values",
            title: "Our Vision & Mission",
          }}
        />
        {/* <!-- ABOUT US AREA END -->

      <!-- COUNTER UP AREA START --> */}
        {/* <CounterUp /> */}
        {/* <!-- COUNTER UP AREA END -->

      <!-- ABOUT US AREA START --> */}
        {/* <AboutUsStyleTwo sectionSpace="pt-120 pb-90" /> */}
        {/* <!-- ABOUT US AREA END -->

      <!-- FEATURE AREA START ( Feature - 6) --> */}

        {/* PRODUCT SLIDER AREA START */}
        {/* <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Properties",
                    title: "Featured Listings",
                  }}
                />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                {!!featuredProducts?.length ? (
                  <Row>
                    {featuredProducts.map((product, key) => {
                      const slug = productSlug(product.title);

                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);
                      const productPrice = product.price.toFixed(2);
                      const cartItem = cartItems.find(
                        (cartItem) => cartItem.id === product.id
                      );
                      const wishlistItem = wishlistItems.find(
                        (wishlistItem) => wishlistItem.id === product.id
                      );
                      const compareItem = compareItems.find(
                        (compareItem) => compareItem.id === product.id
                      );

                      return (
                        <Col
                          key={product.id}
                          lg={4}
                          md={6}
                          sm={12}
                          className="mb-4"
                        >
                          <ProductItem
                            productData={product}
                            slug={slug}
                            baseUrl="shop"
                            discountedPrice={discountedPrice}
                            productPrice={productPrice}
                            cartItem={cartItem}
                            wishlistItem={wishlistItem}
                            compareItem={compareItem}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                ) : null}
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* PRODUCT SLIDER AREA END */}

        {/* <div className="ltn__apartments-plan-area pb-70">
          <Container>
            <Row>
              <Col>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Apartment Sketch",
                    title: "Apartments Plan",
                    additionalClassName: "",
                  }}
                />

                <Tab.Container defaultActiveKey="first">
                  <div className="ltn__tab-menu ltn__tab-menu-3 text-center">
                    <Nav className="nav justify-content-center">
                      <Nav.Link eventKey="first">The Studio</Nav.Link>
                      <Nav.Link eventKey="second">Deluxe Portion</Nav.Link>
                      <Nav.Link eventKey="third">Penthouse</Nav.Link>
                      <Nav.Link eventKey="fourth">Top Garden</Nav.Link>
                      <Nav.Link eventKey="five"> Double Height</Nav.Link>
                    </Nav>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="ltn__apartments-tab-content-inner">
                        <Row>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                              <h2>The Studio</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                              <div className="apartments-info-list apartments-info-list-color mt-40">
                                <ul>
                                  <li>
                                    <label>Total Area</label>
                                    <span>2800 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bedroom</label>
                                    <span>150 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bathroom</label>
                                    <span>45 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Belcony/Pets</label>
                                    <span>Allowed</span>
                                  </li>
                                  <li>
                                    <label>Lounge</label>
                                    <span>650 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-img">
                              <img src="/img/others/10.png" alt="#" />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="ltn__product-tab-content-inner">
                        <Row>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                              <h2>Deluxe Portion</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                              <div className="apartments-info-list apartments-info-list-color mt-40">
                                <ul>
                                  <li>
                                    <label>Total Area</label>
                                    <span>2800 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bedroom</label>
                                    <span>150 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bathroom</label>
                                    <span>45 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Belcony/Pets</label>
                                    <span>Allowed</span>
                                  </li>
                                  <li>
                                    <label>Lounge</label>
                                    <span>650 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-img">
                              <img src="/img/others/10.png" alt="#" />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="ltn__product-tab-content-inner">
                        <Row>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                              <h2>Penthouse</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                              <div className="apartments-info-list apartments-info-list-color mt-40">
                                <ul>
                                  <li>
                                    <label>Total Area</label>
                                    <span>2800 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bedroom</label>
                                    <span>150 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bathroom</label>
                                    <span>45 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Belcony/Pets</label>
                                    <span>Allowed</span>
                                  </li>
                                  <li>
                                    <label>Lounge</label>
                                    <span>650 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-img">
                              <img src="/img/others/10.png" alt="#" />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div className="ltn__product-tab-content-inner">
                        <Row>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                              <h2>Top Garden</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                              <div className="apartments-info-list apartments-info-list-color mt-40">
                                <ul>
                                  <li>
                                    <label>Total Area</label>
                                    <span>2800 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bedroom</label>
                                    <span>150 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bathroom</label>
                                    <span>45 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Belcony/Pets</label>
                                    <span>Allowed</span>
                                  </li>
                                  <li>
                                    <label>Lounge</label>
                                    <span>650 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-img">
                              <img src="/img/others/10.png" alt="#" />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="five">
                      <div className="ltn__product-tab-content-inner">
                        <Row>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                              <h2>Double Height</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                              <div className="apartments-info-list apartments-info-list-color mt-40">
                                <ul>
                                  <li>
                                    <label>Total Area</label>
                                    <span>2800 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bedroom</label>
                                    <span>150 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bathroom</label>
                                    <span>45 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Belcony/Pets</label>
                                    <span>Allowed</span>
                                  </li>
                                  <li>
                                    <label>Lounge</label>
                                    <span>650 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12} lg={6}>
                            <div className="apartments-plan-img">
                              <img src="/img/others/10.png" alt="#" />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
          </Container>
        </div> */}

        {/* <!-- VIDEO AREA START --> */}
        {/* <div className="ltn__video-popup-area">
          <VideoBanner />
        </div> */}
        {/* <!-- VIDEO AREA END --> */}
        {/* <!-- CATEGORY AREA START -->  */}
        {/* <div className="ltn__category-area ltn__product-gutter pt-115 pb-90">
          <Container>
            <Row>
              <Col xs={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Our Aminities",
                    title: "Building Aminities",
                    additionalClassName: "",
                  }}
                />
              </Col>
            </Row>
            <Row className="slick-arrow-1 justify-content-center">
              {aminitiesData.map((data, key) => {
                return (
                  <Col key={key} xs={12} sm={6} md={4} lg={3}>
                    <AminitiesItem data={data} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div> */}
        {/* <!-- CATEGORY AREA END --> */}

        {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}
        {/* <div
          className="ltn__testimonial-area bg-image-top pt-115 pb-70"
          style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Our Testimonial",
                    title: "Clients Feedback",
                  }}
                />
              </Col>
            </Row>

            <Slider
              {...testiMonialsettings}
              className="ltn__testimonial-slider-5-active slick-arrow-1"
            >
              {testimonialData.map((data, key) => {
                return <TestimonialCarouselItem key={key} data={data} />;
              })}
            </Slider>
          </Container>
        </div> */}
        {/* <!-- TESTIMONIAL AREA END --> */}

        {/* <!-- CONTACT AREA START (blog-3) -->  */}
        <div className="ltn__blog-area">
          <CallToActionstyleTwo />
        </div>
        {/* <!-- CONTACT AREA END --> */}

        {/* <!-- BLOG AREA START (blog-3) -->  */}
        {/* <div className="ltn__blog-area pt-115 pb-70">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "News & Blogs",
                    title: "Leatest News Feeds",
                  }}
                />
              </Col>
            </Row>
            <Slider
              {...blogSettings}
              className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
            >
              {blogData.map((data, key) => {
                const slug = productSlug(data.title);
                return (
                  <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
                );
              })}
            </Slider>
          </Container>
        </div> */}
        {/* <!-- BLOG AREA END --> */}

        {/* <!-- CONTACT MESSAGE AREA START --> */}
        {/* <div className="ltn__contact-message-area mb-120 mt-115">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__form-box contact-form-box box-shadow white-bg">
                  <h4 className="title-2">Contact Us</h4>
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
                      <div className="col-md-6">
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
                      </div>
                      <div className="col-md-6">
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
                      ></textarea>
                      <span className="inline-icon">
                        <FaPencilAlt />
                      </span>
                    </div>
                    <p>
                      <label className="input-info-save mb-0">
                        <input type="checkbox" name="agree" /> Save my name,
                        email, and website in this browser for the next time I
                        comment.
                      </label>
                    </p>
                    <div className="btn-wrapper mt-0">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        get a free service
                      </button>
                    </div>
                    <p className="form-messege mb-0 mt-20"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- CONTACT MESSAGE AREA END --> */}

        {/* <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div> */}
      </LayoutOne>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");
  const Herodata = JSON.parse(await fs.readFile(filePath));

  return {
    props: {
      Herodata,
    },
  };
}

export default HomePage;
