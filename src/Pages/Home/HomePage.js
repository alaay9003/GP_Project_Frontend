import React from "react";
import Navs from "../../Components/NavBar/Navs";
import Landing from "../../Components/util/Landing";
import LearnPathContainer from "../../Components/LearningPath/LearnPathContainer";
import RandomCourses from "../../Components/Random Courses/RandomCourses";

function HomePage() {
  return (
    <>
      <Navs />
      <Landing />
      {/* <LearnPathContainer />
      <RandomCourses /> */}
    </>
  );
}

export default HomePage;
