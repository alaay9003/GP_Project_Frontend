import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneCourse } from "../../../Redux/Actions/courseAction";

function SvmPage() {
  const { id } = useParams();
  const oneCourse = useSelector((state) => state.Courses.oneCourse);
  const dispatch = useDispatch();
  let title = "";
  const html = document.querySelector(".html");
  useEffect(() => {
    dispatch(getOneCourse(id));
  }, []);
  let item = [];
  if (oneCourse.responseObject) {
    item = oneCourse.responseObject;
    try {
      html.innerHTML = item.htmlCentent;
      title = item.title;
    } catch (e) {
      console.log(e);
    }
  } else {
    item = [];
  }

  return (
    <>
      <Container className="minH fs-4 text-center ">
        <h1 className=" fw-bold fs-1">{title}</h1>
        <Row className="m-3 my-4 html "></Row>
      </Container>
    </>
  );
}

export default SvmPage;
