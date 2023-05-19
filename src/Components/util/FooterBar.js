// import React from "react";

// function FooterBar() {
//   return (
//     <div
//       className="bg-main text-white p-4 text-center"
//       style={{ zIndex: "100", position: "sticky" }}
//     >
//       All copyright reserved &copy;
//     </div>
//   );
// }

// export default FooterBar;

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="black" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block" style={{ color: "white" }}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset hovFace">
            <MDBIcon fab icon="facebook-f" style={{ color: "#dcdcdc" }} />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" style={{ color: "#1da1f2" }} />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" style={{ color: "rgb(198, 62, 62)" }} />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#dcdcdc" }}
              >
                <MDBIcon icon="gem" className="me-3" />
                About US
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#dcdcdc" }}
              >
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  PlayGround
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#dcdcdc" }}
              >
                Contact
              </h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Cairo,Egypt
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Alaay9003@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +02 01270579984
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "black" }}>
        © 2022 Copyright:
        <a
          className="text-reset fw-bold"
          href=" "
          style={{ color: "white !important" }}
        >
          Helwan University Team
        </a>
      </div>
    </MDBFooter>
  );
}
