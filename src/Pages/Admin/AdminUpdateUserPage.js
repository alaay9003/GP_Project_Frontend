import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import Navs from "../../Components/NavBar/Navs";
import AdminUpdateUser from "../../Components/Admin/AdminUpdateUser";

function AdminUpdateUserPage() {
  return (
    <>
      <Navs />
      <Row className="m-0">
        <Col xs="4" sm="3" className="side-nav">
          <AdminSidBar />
        </Col>
        <Col xm="8">
          <AdminUpdateUser />
        </Col>
      </Row>
    </>
  );
}

export default AdminUpdateUserPage;
