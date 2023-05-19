import { Avatar, MenuItem } from "@mui/joy";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Images/avatar-06.png";

function Navs() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") != null) setUser(true);
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  return (
    <Navbar
      expand="lg"
      className="navBar bg-main"
      style={{ borderBottom: "1px solid" }}
    >
      <Container fluid>
        <Link className="link " to={"/"}>
          <Navbar.Brand className="text-white">Algorfit</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ backgroundColor: "gold" }}
        />
        <Navbar.Collapse id="navbarScroll" className="text-center ">
          <Nav
            className="me-auto my-2 my-lg-0 hoverlink w-100 justify-content-center nav-pills "
            style={{}}
            navbarScroll
          >
            <Link to={"/"} className=" link text-main mx-2 p-1 ">
              Home
            </Link>
            <Link to={"/courses"} className="link text-main mx-2 p-1  ">
              Courses
            </Link>

            <a
              href={"http://localhost:8501/"}
              className="link text-main mx-2 p-1"
              target={"_blank"}
            >
              Playground
            </a>
            <Link to={"/computations"} className="link text-main mx-2 p-1">
              Computations
            </Link>
            <Link to={"/about"} className="link text-main mx-2 p-1">
              About Us
            </Link>
          </Nav>
          <div className="d-flex justify-content-evenly">
            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  <img
                    src={img}
                    className="userImg"
                    style={{ width: "2rem" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{ left: "-100px", backgroundColor: "darkgray" }}
                >
                  <Link
                    to={"/admin/allusers"}
                    className="link d-block text-center my-1 hoverr text-black "
                  >
                    <span>Profile</span>
                  </Link>
                  <Link
                    to={"/"}
                    onClick={logOut}
                    className="link d-block text-center my-1 hoverr text-black "
                  >
                    <span>LogOut</span>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to={"/login"} className="link">
                <Button className="text-white border-0 bg-main bt">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
