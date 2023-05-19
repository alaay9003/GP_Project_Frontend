import React from "react";
import { Col, Row } from "react-bootstrap";
import AddCourse from "../../Components/Admin/AddCourse";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import Navs from "../../Components/NavBar/Navs";
function AdminCreateTutorialPage() {
  return (
    <>
      <Navs />
      <Row className="m-0">
        <Col xs="4" sm="3" className="side-nav">
          <AdminSidBar />
        </Col>
        <Col xs="8" sm="9" className="bg-white">
          <AddCourse />
        </Col>
      </Row>
    </>
  );
}

export default AdminCreateTutorialPage;
