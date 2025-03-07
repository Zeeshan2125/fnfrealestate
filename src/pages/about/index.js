import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import featureData from "@/data/service";
import TeamItem from "@/components/team";
import TeamData from "@/data/team";

function AboutUs() {
  const agents = getProducts(TeamData, "buying", "featured", 6);
  const featureDataSorted = getProducts(featureData, "buying", "featured", 3);
  const vision = [
    {
      title: "Vision",
      shortDescription:
        "This is our vison This is our vison This is our vison This is our vison This is our vison This is our vison This is our vison",
      icon: "/img/vision.png",
    },
    {
      title: "Mission",
      shortDescription:
        "This is our Mission This is our Mission This is our Mission This is our Mission This is our Mission This is our Mission",
      icon: "/img/mission.png",
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

  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    autoplay: true,
    autoplaySpeed: 5000,
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
  };

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="About Us"
          sectionPace=""
          currentSlug="About Us"
        />

        <AboutUsStyleOne sectionSpace="pb-90" />

        <Feature
          classes="section-bg-1"
          servicebtn={true}
          imageTag={true}
          data={vision}
          white={true}
          titleSectionData={{
            sectionClasses: "text-center",
            subTitle: "Core Values",
            title: "Our Vision & Mission",
          }}
        />

        {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}
        {/* <div
          className="ltn__testimonial-area bg-image-top pt-115 pb-70"
          style={{ backgroundColor: "#bfbfbf" }}
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

        <div>
          <Container>
            <div className="ltn__team-area pt-115 pb-90">
              <Row>
                <Col lg={12}>
                  <TitleSection
                    sectionClasses="text-center"
                    headingClasses="section-subtitle-2"
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
                      <TeamItem
                        key={key}
                        baseUrl="blog"
                        data={data}
                        slug={slug}
                        additionalClassname=""
                        white={false}
                      />
                    );
                  })}
                </Slider>
              </Row>
            </div>
          </Container>
        </div>

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

export default AboutUs;
