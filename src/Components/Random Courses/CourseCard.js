import { Link } from "react-router-dom";
import "./CourseCard.css";
function CourseCard(props) {
  return (
    <Link to={""}>
      <div className="CourseCard">
        <img src={props.photo} alt={props.alt} className="imgg" />
        <h3>{props.name}</h3>
      </div>
    </Link>
  );
}

export default CourseCard;
