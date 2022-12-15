import { Row, Col } from "react-bootstrap";

const PostsDisplay = () => {
  return (
    <>
      <div className="mainContainerPost mt-2 p-2">
        <Row>
          <Col className="d-flex">
            <div>
              <p className="font-weight-bold text-smaller p-0 m-0">
                profile name{" "}
              </p>
              <p className="text-smaller"> post title</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>post text</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <img
              src="https://picsum.photos/200/"
              alt="random-pic"
              className="w-100"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PostsDisplay;
