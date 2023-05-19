import React from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import img from "../../Images/python1.jpg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteCourse } from "../../Redux/Actions/courseAction";

function AdminAllCourses(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    await dispatch(deleteCourse(props.id));
    window.location.reload();
  };
  return (
    <>
      <div className="d-flex  flex-column fit  text-center m-2">
        <Row className="justify-content-center ">
          <Button
            variant="danger"
            onClick={handleShow}
            className="fit bg-danger"
          >
            Delete Course
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are You Sure???</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="bg-secondary"
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={handleDelete}
                className="bg-danger"
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
        <Row>
          <img
            src={img}
            alt="img"
            className="courseImg"
            style={{ width: "20rem" }}
          />
        </Row>
        <Row className="justify-content-center">{props.CourseName}</Row>
        <Row className="justify-content-center">{props.description}</Row>
      </div>
    </>
  );
}

export default AdminAllCourses;
