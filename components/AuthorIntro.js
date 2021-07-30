import { Row, Col, Media, Image } from "react-bootstrap";

const AuthorIntro = () => (
  <Row>
    <Col md="8">
      {/* AUTHOR INTRO STARTS */}
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={100}
          height={100}
          className="mr-3"
          src="https://raw.githubusercontent.com/yashhguptaa1/yg-portfolio/main/images/me.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
            My name is Yash Gupta and I am an experienced software engineer and
            freelance developer. and this is my blog page.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>
);

export default AuthorIntro;
