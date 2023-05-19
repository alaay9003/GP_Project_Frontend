import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Row className="land d-flex text-center justify-content-center m-0 align-items-center bg-main">
        <Col>
          <div className="text-white my-4 fw-bold  ">
            <h1 className="fw-bold fs-1 mb-5">Welcome to Algorfit Academy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              excepturi dolores illum soluta dolorem asperiores quia adipisci
              deleniti vero. Labore laboriosam Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est excepturi dolores illum soluta
              dolorem asperiores quia adipisci deleniti vero. Labore laboriosam
            </p>
          </div>
          <Link to={"/signup"} className="link">
            <button
              className="text-main my-3 bt2  my-4"
              style={{ backgroundColor: "var(--thrdColor)", zIndex: "100" }}
            >
              Join Us Now For Free
            </button>
          </Link>
        </Col>
      </Row>

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 126"
        style={{ position: "absolute", bottom: "-40", zIndex: "1" }}
      >
        <path
          class="main-path"
          fill="#ededed"
          d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"
        ></path>
      </svg>
    </>
  );
}

export default Landing;
