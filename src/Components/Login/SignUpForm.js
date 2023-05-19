import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Bounce } from "react-reveal";
import SignUpFormHook from "../../hook/signup-form-hook";
import notify from "../../hooks/useNotification";
import { ToastContainer } from "react-toastify";
function SignUpForm() {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
    isPress,
  ] = SignUpFormHook();
  return (
    <Container style={{ minHeight: "82vh" }}>
      <Bounce right>
        <Row className=" m-5 justify-content-center ">
          <Col
            style={{ width: "400px", height: "600px", flex: "none" }}
            className="bg-thr p-0 reduceL   d-flex flex-column align-items-center justify-content-center "
          >
            <h2 className="my-2 text-main">Sign In</h2>
            <p className="my-2 text-main">Sign in here if you have account.</p>
            <Link to={"/login"} className="link">
              <button className="text-white border-main bt my-3 bg-main">
                SING IN
              </button>
            </Link>
          </Col>
          <Col
            style={{ width: "400px", height: "600px", flex: "none" }}
            className=" p-0 reduceR d-flex flex-column text-center align-items-center justify-content-center bg-main  "
          >
            <h2 className="fw-bold text-white" style={{ marginTop: "50px" }}>
              Sign Up
            </h2>
            <input
              value={name}
              onChange={onChangeName}
              type={"text"}
              placeholder="Your Name"
              className="my-3 inp"
            />
            <input
              value={email}
              onChange={onChangeEmail}
              type={"email"}
              placeholder="Email"
              className="my-3 inp"
            />
            <input
              value={phone}
              onChange={onChangePhone}
              type={"phone"}
              placeholder="Phone"
              className="my-3 inp"
            />
            <input
              value={password}
              onChange={onChangePassword}
              type={"password"}
              placeholder="Password"
              className="my-3 inp"
            />
            <input
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              type={"password"}
              placeholder="confirm Password"
              className="my-3 inp"
            />
            <button
              onClick={OnSubmit}
              className="text-main my-3 bt2  my-4"
              style={{ backgroundColor: "var(--thrdColor)" }}
            >
              SING UP
            </button>
            {isPress === true ? (
              loading === true ? (
                <Spinner
                  animation="border"
                  role="status "
                  variant="danger"
                ></Spinner>
              ) : null
            ) : null}
          </Col>
        </Row>
      </Bounce>
      <ToastContainer />
    </Container>
  );
}

export default SignUpForm;
