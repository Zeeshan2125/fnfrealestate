import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
const TeamItem = ({ data, baseUrl, slug, additionalClassname, white }) => {
  return (
    <>
      <div className={`ltn__team-item ${additionalClassname}`}>
        <div
          className="team-img"
          style={{
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src={`/img/team/${data.image}`} alt="Image" /> */}
          <img src={`/img/logo.png`} alt="Image" style={{ width: "80%" }} />
        </div>
        <div className="team-info pt-0">
          {/* <h4 style={white ? { color: "whitesmoke" } : null}>{data.name}</h4>
          <h6 className="ltn__secondary-color">{data.designation}</h6> */}
          <div
            className="ltn__social-media"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="#">
                <img
                  src={`/img/whatsapp.png`}
                  alt="Image"
                  style={{ width: "50px", height: "50px" }}
                />
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="#">
                <img
                  src={`/img/email.png`}
                  alt="Image"
                  style={{ width: "50px", height: "50px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItem;
