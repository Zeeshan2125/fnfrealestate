import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="mailto:info@webmail.com">
              <FaEnvelope />
              <i></i> info@webmail.com
            </Link>
          </li>
          <li>
            <Link href="/locations">
              <FaMapMarkerAlt />
              15/A, Nest Tower, NYC
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="ltn__top-bar-menu fact-mbl py-1">
        <h6 className="slide-sub-title mb-0" style={{ color: "#ffffff" }}>
          Facts and Figures
        </h6>
        <p className="slide-sub-title mb-0" style={{ color: "#ffffff" }}>
          Business with no complaints
        </p>
      </div> */}
    </>
  );
};

export default HeaderTopInfo;
