import { Row, Col } from "react-bootstrap";

const PostsDisplay = (props) => {
  return (
    <>
      <div className="mainContainerPost">
        <Row>
          <div className=" mt-2 p-1">
            <img
              className="userPicturePost mt-2 ml-3"
              src="https://picsum.photos/200/"
              alt="profile.name"
            />{" "}
          </div>
          <div>
            <div>
              {props.post.user.name} {props.post.user.surname}
            </div>
            <div>{props.post.user.title}</div>
          </div>
          <Col xs={12}>
            <div>{props.post.text}</div>
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
        <Row>
          <Col xs={12}>
            <div>post text</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PostsDisplay;
