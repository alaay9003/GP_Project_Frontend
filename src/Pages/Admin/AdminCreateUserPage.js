import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminCreateUser from "../../Components/Admin/AdminCreateUser";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import Navs from "../../Components/NavBar/Navs";
function AdminCreateUserPage() {
  return (
    <>
      <Navs />
      <Row className="m-0">
        <Col xs="4" sm="3" className="side-nav">
          <AdminSidBar />
        </Col>
        <Col xm="8">
          <AdminCreateUser />
        </Col>
      </Row>
    </>
  );
}

export default AdminCreateUserPage;
