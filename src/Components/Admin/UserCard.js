import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../Redux/Actions/userAction";

function UserCard({ index, item, type, img }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleDelete = async () => {
    await dispatch(deleteUser(item.id));
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
          <Button className="bg-dark" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "370px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}
        >
          <Card.Img style={{ height: "200px", width: "100%" }} src={img} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{item.userName}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between ">
                <div className="d-flex ">
                  <div style={{ width: "100%" }} className="mb-1">
                    <p>{item.email}</p>
                    <p>{type}</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Link
                  to={`/admin/edituser/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  className=""
                >
                  <Button className=" btn-card ">Edit</Button>
                </Link>
                <Button
                  className="btn-card-black"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Delete
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default UserCard;
