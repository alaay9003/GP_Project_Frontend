import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminAllUser from "../../Components/Admin/AdminAllUser";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import Navs from "../../Components/NavBar/Navs";

function AdminAllUsersPage() {
  return (
    <>
      <Navs />
      <Row className="m-0">
        <Col sm="3" xs="2" md="2" className="side-nav">
          <AdminSidBar />
        </Col>
        <Col>
          <AdminAllUser sm="9" xs="10" md="10" />
        </Col>
      </Row>
    </>
  );
}

export default AdminAllUsersPage;
