import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";

function AdminSidBar() {
  return (
    <>
      <Row
        className="p-0 text-center m-0 bg-sec"
        style={{ minHeight: "100%", backgroundColor: "#f8716e", padding: "0" }}
      >
        <Col
          className="d-flex flex-column m-0 side-nav-col"
          style={{ backgroundColor: "#31333f" }}
        >
          <div>
            <i className="fa-solid fa-user"></i>
            <Link to={"/admin/allusers"}>All Users</Link>
          </div>
          <div className="p-y-2">
            <i className="fa-solid fa-file-lines"></i>
            <Link to={"/admin/alltutorials"}>All Tutorials</Link>
          </div>
          <div>
            <i className="fa-solid fa-vials"></i>
            <Link to={"/admin/allcompetitions"}>All Competitions</Link>
          </div>
          <div>
            <i className="fa-solid fa-road"></i>
            <Link to={"/admin/alllearningpathes"}>All Learning Path's</Link>
          </div>
          <div>
            <i className="fa-solid fa-plus"></i>
            <Link to={"/admin/createuser"}>Create User</Link>
          </div>
          <div>
            <i className="fa-solid fa-feather-pointed"></i>
            <Link to={"/admin/createtutorial"}>Create Tutorial</Link>
          </div>
          <div>
            <i className="fa-solid fa-pen"></i>
            <Link to={"/admin/createcompetition"}>Create Competition</Link>
          </div>
          <div>
            <i className="fa-solid fa-car"></i>
            <Link to={"/admin/createlearningpath"}>Create Learning Path</Link>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AdminSidBar;
