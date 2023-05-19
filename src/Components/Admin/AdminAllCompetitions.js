import React from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import img from "../../Images/comp.jpg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteCompetition } from "../../Redux/Actions/CompetitionActions";

function AdminAllCompetitions(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    console.log(props.id);
    await dispatch(deleteCompetition(props.id));
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
            Delete Competition
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
          <img src={img} alt="img" className="courseImg" />
        </Row>
        <Row className="justify-content-center">{props.Name}</Row>
        <Row className="justify-content-center">{props.description}</Row>
        <Row className="justify-content-center">Prize:{props.prize}</Row>
        <Row className="justify-content-center">Start:{props.startDate}</Row>
        <Row className="justify-content-center">End:{props.endtDate}</Row>
      </div>
    </>
  );
}

export default AdminAllCompetitions;
