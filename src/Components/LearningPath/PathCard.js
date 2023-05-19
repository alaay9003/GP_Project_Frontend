import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Images/python.png";

function PathCard() {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex fit click rot ">
      <Link
        to={`/course/:id`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card
          style={{ border: "none" }}
          className="card2hov align-items-center"
        >
          <Card.Img
            variant="top"
            src={img}
            style={{
              height: "150px",
              width: "200px",
              backgroundColor: "white",
            }}
            className=""
          />

          <p>
            <i className="fa-regular fa-heart"></i>
          </p>
          <Card.Body className="p-0">
            <p className="text-center fw-bold text-white">Python Path</p>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default PathCard;
