import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import Navs from "../../Components/NavBar/Navs";
function AdminCreateQuizPage() {
  return (
    <>
      <Navs />
      <Row className="m-0">
        <Col sm="3" className="side-nav">
          <AdminSidBar />
        </Col>
      </Row>
    </>
  );
}

export default AdminCreateQuizPage;
