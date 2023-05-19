import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import Navs from "../../Components/NavBar/Navs";
import AdminCreateCompetition from "../../Components/Admin/AdminCreateCompetition";
function AdminCreateCompetitionPage() {
  return (
    <>
      <Navs />
      <Row className="m-0">
        <Col xs="4" sm="3" className="side-nav">
          <AdminSidBar />
        </Col>
        <Col xs="8" sm="9">
          <AdminCreateCompetition />
        </Col>
      </Row>
    </>
  );
}

export default AdminCreateCompetitionPage;
