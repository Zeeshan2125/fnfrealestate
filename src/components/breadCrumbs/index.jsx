import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaHome, FaAngleRight } from "react-icons/fa";

const BreadCrumb = ({ title, currentSlug, sectionPace }) => {
  return (
    <>
      <div
        className={`ltn__breadcrumb-area text-left ${sectionPace}`}
        style={{ backgroundColor: "#01356d" }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title" style={{ color: "whitesmoke" }}>
                  {title}
                </h1>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <Link href="/">
                        <span className="ltn__secondary-color">
                          <FaHome className="me-2" />
                        </span>
                        <span className="me-2" style={{ color: "whitesmoke" }}>
                          Home
                        </span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <span style={{ color: "whitesmoke" }} className="me-2">
                          Projects
                        </span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li style={{ color: "whitesmoke" }}> {currentSlug}</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BreadCrumb;
