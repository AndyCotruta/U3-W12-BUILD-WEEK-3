import { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const ExperienceModal = (props) => {
  // const addedData = {
  //   role: "CTO",
  //   company: "Strive School",
  //   startDate: "2019-06-16",
  //   endDate: "2019-06-16",
  // };

  const [addedData, setAddedData] = useState({
    role: "",
    company: "",
    title: "",
  });
  //this is for edit :)
  // useEffect(() => {
  //   setAddedData(props.expData);
  // }, [props.expData]);

  function handleChange(event) {
    setAddedData({ ...addedData, [event.target.name]: event.target.value });
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="experience-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="mx-3">
          Add Experience
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mx-3">* indicates required</p>
        <Form className="mx-3">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title*</Form.Label>
            <Form.Control
              value={addedData.title}
              onChange={handleChange}
              name="title"
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Employment type</Form.Label>
            <Form.Control as="select">
              <option>Please select</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Self-employed</option>
              <option>Freelance</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Apprenticeship</option>
              <option>Seasonal</option>
            </Form.Control>
            <p>
              Learn more about{" "}
              <span>
                <a href="https://www.linkedin.com/help/linkedin/answer/a549563?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_position%3BgJ0yLoo2SCiO0YPLpEz2Rg%3D%3D">
                  employment types
                </a>
              </span>
            </p>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Company name*</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Location type</Form.Label>
            <Form.Control as="select">
              <option>Please select</option>
              <option>On-Site</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <p>Start date*</p>
            <Row>
              <Col>
                <Form.Control placeholder="month" />
              </Col>
              <Col>
                <Form.Control placeholder="year" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <p>End date*</p>
            <Row>
              <Col>
                <Form.Control placeholder="month" />
              </Col>
              <Col>
                <Form.Control placeholder="year" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
