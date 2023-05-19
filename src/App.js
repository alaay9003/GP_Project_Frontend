import "devextreme/dist/css/dx.light.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterBar from "./Components/util/FooterBar";
import AdminAllUsersPage from "./Pages/Admin/AdminAllUsersPage";
import AdminAllCompetitionsPage from "./Pages/Admin/AdminAllCompetitionsPage";
import AdminAllLearningPathsPage from "./Pages/Admin/AdminAllLearningPathsPage";
import AdminAllQuizzesPage from "./Pages/Admin/AdminAllQuizzesPage";
import AdminAllTutorialsPage from "./Pages/Admin/AdminAllTutorialsPage";
import AdminCreateCompetitionPage from "./Pages/Admin/AdminCreateCompetitionPage";
import AdminCreateLearningPathPage from "./Pages/Admin/AdminCreateLearningPathPage";
import AdminCreateQuizPage from "./Pages/Admin/AdminCreateQuizPage";
import AdminCreateTutorialPage from "./Pages/Admin/AdminCreateTutorialPage";
import AdminCreateUserPage from "./Pages/Admin/AdminCreateUserPage";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/auth/LoginPage";
import SignUpPage from "./Pages/auth/SignUpPage";
import About from "./Pages/About/About";
import SvmPage from "./Pages/Course/CourseDetPage";
import Tutorials from "./Components/Coursess/Tutorials";
import CompetitionPage from "./Pages/Competition/CompetitionPage";
import AdminUpdateUser from "./Components/Admin/AdminUpdateUser";
import AdminUpdateUserPage from "./Pages/Admin/AdminUpdateUserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/computations" element={<CompetitionPage />} />
          <Route path="/admin/allusers" element={<AdminAllUsersPage />} />
          <Route
            path="/admin/alltutorials"
            element={<AdminAllTutorialsPage />}
          />
          <Route
            path="/admin/allcompetitions"
            element={<AdminAllCompetitionsPage />}
          />
          <Route
            path="/admin/alllearningpathes"
            element={<AdminAllLearningPathsPage />}
          />
          <Route path="/admin/allquizzes" element={<AdminAllQuizzesPage />} />
          <Route path="/admin/createuser" element={<AdminCreateUserPage />} />
          <Route
            path="/admin/createtutorial"
            element={<AdminCreateTutorialPage />}
          />
          <Route
            path="/admin/createcompetition"
            element={<AdminCreateCompetitionPage />}
          />
          <Route path="/admin/edituser/:id" element={<AdminUpdateUserPage />} />

          <Route
            path="/admin/createlearningpath"
            element={<AdminCreateLearningPathPage />}
          />
          <Route path="/admin/createquiz" element={<AdminCreateQuizPage />} />
          <Route path="/courses" element={<Tutorials />} />
          <Route path="/courses/:id" element={<SvmPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <FooterBar />
    </>
  );
}

export default App;
