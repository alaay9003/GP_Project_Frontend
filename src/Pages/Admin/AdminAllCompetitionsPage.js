import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import Navs from "../../Components/NavBar/Navs";
import AdminAllCompetitions from "../../Components/Admin/AdminAllCompetitions";
import { useDispatch, useSelector } from "react-redux";
import { gatAllCompetitions } from "../../Redux/Actions/CompetitionActions";
import { Grid } from "@mui/material";
function AdminAllCompetitionsPage() {
  const Competition = useSelector(
    (state) => state.CompetitionReducer.Competitions
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gatAllCompetitions());
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
      <Row className="m-0">
        <Col xs="4" sm="3" className="side-nav">
          <AdminSidBar />
        </Col>
        <Col xs="8" sm="9">
          <Grid
            container
            columnSpacing={1}
            rowSpacing={1}
            className="containerGrid   "
          >
            {Competitions ? (
              Competitions.map((item, index) => {
                return (
                  <AdminAllCompetitions
                    key={index}
                    Name={item.title}
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
            )}
          </Grid>
        </Col>
      </Row>
    </>
  );
}

export default AdminAllCompetitionsPage;
