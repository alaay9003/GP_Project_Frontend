import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SubTitle({ title, btnTitle, path }) {
  return (
    <>
      <div className="d-flex justify-content-between pt-4 ">
        <div className="subTitle text-white">{title}</div>
        {btnTitle ? (
          <Link to={path} style={{ textDecoration: "none" }}>
            {" "}
            <Button className="border-main text-main bg-main">
              {btnTitle}
            </Button>
          </Link>
        ) : null}
      </div>
    </>
  );
}

export default SubTitle;
