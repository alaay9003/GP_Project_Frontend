import React, { useState } from "react";
import { Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteAdmin } from "../../Redux/Actions/userAction";

function AdminCard({ index, item, type, img }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleDelete = async () => {
    await dispatch(deleteAdmin(item.id));
    setShow(false);
    window.location.reload();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure???</Modal.Body>
        <Modal.Footer>
          <Button className="bg-dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Col xs="12" sm="6" md="5" lg="4" className="d-flex   mb-3 ">
        <div
          style={{ border: "none" }}
          className=" white d-flex flex-column p-2 justify-content-center text-center"
        >
          <div className="d-flex justify-content-between p-1 m-2 ">
            <Link
              to={`/admin/edituser/:id`}
              style={{ textDecoration: "none", color: "black" }}
              className=""
            >
              <Button variant="dark" className="fit bg-dark">
                Edit
              </Button>
            </Link>
            <Button
              variant="danger"
              className="fit bg-danger"
              onClick={() => {
                setShow(true);
              }}
            >
              Delete
            </Button>
          </div>
          <img
            src={img}
            alt="1"
            style={{ minHeight: "100px", minWidth: "100px", width: "200px" }}
            className=" m-auto"
          />
          <div className="">
            <p>{item.userName}</p>
            <p>{item.email}</p>
            <p>{type}</p>
          </div>
        </div>
      </Col>
    </>
  );
}

export default AdminCard;
