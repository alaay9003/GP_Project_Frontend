import CourseCard from "./CourseCard";
import Photo from "../../Images/SVM.jpg";
import Photo2 from "../../Images/KNN.png";
import "./RandomCourses.css";
import SubTitle from "../util/SubTitle";
import { Container } from "react-bootstrap";

function RandomCourses() {
  return (
    <>
      <Container className="my-4 p-2 ">
        <SubTitle title="Random Courses" />
        <div className="Parent d-flex justify-content-center">
          <CourseCard photo={Photo} className="Card" name="SVM"></CourseCard>
          <CourseCard
            photo={Photo2}
            className="Card"
            name="K-Nearest"
          ></CourseCard>
          <CourseCard photo={Photo} className="Card" name="Neural"></CourseCard>
          <CourseCard photo={Photo} className="Card" name="Neural"></CourseCard>
        </div>
      </Container>
    </>
  );
}

export default RandomCourses;
