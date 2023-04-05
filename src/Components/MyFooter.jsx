import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function MyFooter() {
  return (
    <footer>
      <Row className="text-secondary m-5">
        <Col xs={8} className="offset-2">
          <div
            style={{ fontSize: "30px", marginBottom: "20px" }}
            className="col d-flex"
          >
            <FaFacebook className="text-secondary mx-4" />
            <FaInstagram className="text-secondary mx-4" />
            <FaTwitter className="text-secondary mx-4" />
            <FaYoutube className="text-secondary mx-4" />
          </div>
          <Row style={{ fontSize: "15px", textAlign: "left" }}>
            <Col xs={6} lg={3}>
              <p>Audio and Subtitles</p>
              <p>Media Center</p>
              <p>Privacy</p>
              <p>Contact Us</p>
            </Col>
            <Col xs={6} lg={3}>
              <p>Audio Description</p>
              <p>Investor Relations</p>
              <p>Legal Notices</p>
            </Col>
            <Col xs={6} lg={3}>
              <p>Help Center</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
            </Col>
            <Col xs={6} lg={3}>
              <p>Gift Cards</p>
              <p>Terms of Use</p>
              <p>Corporate Information</p>
            </Col>
          </Row>
          <div
            className="helper"
            style={{ border: "1px solid gray", margin: "auto 45%" }}
          >
            <p>Services</p>
          </div>
          <Row className="text-left my-3 ml-2">
            <Col>
              <p style={{ fontSize: "smaller" }}>© 1997-2019 Netflix, inc.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
}

export default MyFooter;
