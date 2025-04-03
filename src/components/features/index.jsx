import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSection from "@/components/titleSection";
import { productSlug } from "@/lib/product";
function Feature({
  data,
  iconTag,
  servicebtn,
  titleSectionData,
  classes,
  headingClasses,
  white,
  imageTag,
}) {
  console.log("data====>", data);

  return (
    <>
      <div
        className={`ltn__feature-area pt-115 pb-90 ${classes}`}
        style={{ backgroundColor: "#01356d" }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                titleSectionData={titleSectionData}
                sectionClasses={titleSectionData.sectionClasses}
                headingClasses={headingClasses}
                white={white}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            {data?.map((item, key) => {
              const slug = productSlug(item.title);
              return (
                <Col key={key} xs={12} sm={6} lg={6}>
                  <div
                    style={{ backgroundColor: "#034e9e" }}
                    className={`ltn__feature-item ltn__feature-item-6 text-center  box-shadow-1 ${
                      item.active ? "active" : ""
                    }`}
                  >
                    <div className="ltn__feature-icon">
                      {iconTag ? (
                        <span>
                          <i className={`${item.icon}`}></i>
                        </span>
                      ) : (
                        <span>
                          <i className={`${item.icon}`}></i>
                        </span>
                      )}
                      {imageTag && (
                        <img
                          src={item.icon}
                          alt="Mission Image"
                          style={{ width: "22%" }}
                        />
                      )}
                    </div>
                    <div className="ltn__feature-info">
                      <h3 style={{ color: "whitesmoke" }}>{item.title}</h3>
                      <p style={{ color: "whitesmoke" }}>
                        {" "}
                        {item.shortDescription}
                      </p>

                      {/* {servicebtn ? (
                        <Link
                          className="ltn__service-btn"
                          href={`/service/${slug}`}
                        >
                          {item.buttonText}

                          <i className="flaticon-right-arrow"></i>
                        </Link>
                      ) : (
                        ""
                      )} */}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature;
