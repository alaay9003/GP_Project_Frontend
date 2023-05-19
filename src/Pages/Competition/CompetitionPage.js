import React, { useEffect, useState } from "react";
import Navs from "../../Components/NavBar/Navs";
import CompetitionCard from "../../Components/Competition/CompetitionCard";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { gatAllCompetitions } from "../../Redux/Actions/CompetitionActions";
import { Link } from "react-router-dom";

function CompetitionPage() {
  const [user, setUser] = useState(false);

  const Competition = useSelector(
    (state) => state.CompetitionReducer.Competitions
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gatAllCompetitions());
    if (localStorage.getItem("token") != null) setUser(true);
  }, []);
  let Competitions = [];
  if (Competition.responseObject) {
    Competitions = Competition.responseObject;
  } else {
    Competitions = [];
  }

  return (
    <>
      <Navs />
      <Container
        className="d-flex justify-content-center"
        style={{ minHeight: "90vh" }}
      >
        {user ? (
          Competitions ? (
            Competitions.map((item, index) => {
              return (
                <CompetitionCard
                  key={index}
                  title={item.title}
                  prize={item.prize}
                  startDate={item.startDate}
                  endtDate={item.endtDate}
                  description={item.description}
                  id={item.id}
                />
              );
            })
          ) : (
            <h1>No Competition Found</h1>
          )
        ) : (
          <Link to={"/signup"} className="link">
            <button
              className="text-main my-3 bt2  my-4"
              style={{ backgroundColor: "var(--thrdColor)", zIndex: "100" }}
            >
              You Should have an account Join Us Now For Free
            </button>
          </Link>
        )}
      </Container>
    </>
  );
}

export default CompetitionPage;
