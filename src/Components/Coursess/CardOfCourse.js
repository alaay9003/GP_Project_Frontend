import React from "react";
import "./CardOfCourse.css";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import img from "../../Images/python1.jpg";
import { Link } from "react-router-dom";

function CardOfCourse(props) {
  return (
    <>
      <Link to={props.CourseLink} className="link">
        <Box
          sx={{
            perspective: "1000px",
            transition: "transform 0.4s",
            "& > div, & > div > div": {
              transition: "inherit",
            },
            "&:hover": {
              "& > div": {
                transform: "rotateY(30deg)",
                "& > div:nth-child(2)": {
                  transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                },
                "& > div:nth-child(3)": {
                  transform: "translate3d(45px, 50px, 40px)",
                },
              },
            },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              minHeight: "280px",
              width: 320,
              backgroundColor: "#fff",
              borderColor: "#000",
              margin: "1rem ",
            }}
          >
            <Typography level="h2" fontSize="lg" textColor="#000"></Typography>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                border: "1px solid",
                borderColor: "#777",
              }}
            >
              <Typography level="h2" fontSize="lg" textColor="#fff">
                <img src={img} alt="courseImg" />
              </Typography>
            </CardCover>
            <CardContent
              sx={{
                alignItems: "self-end",
                justifyContent: "flex-end",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                border: "1px solid",
                borderColor: "#000",
              }}
            >
              <Typography level="h2" fontSize="lg" textColor="#fff" m={3}>
                {props.CourseName}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Link>
    </>
  );
}

export default CardOfCourse;
