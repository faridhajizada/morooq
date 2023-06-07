import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./../../styles/ExamHeader.module.scss";
import DirectionsDropdown from "./../../components/dropdown/DirectionsDropdown";

function ExamHeader() {
  return (
    <Container fluid>
      <Row>
        <div className={s.examHeader}>
          <Col md={4}>
            <div className={s.examSection}>
              {/* <h3> Writing</h3> */}
              <div className={s.dropdown}>
                <DirectionsDropdown />
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={s.examTime}>
              <h2>0:00</h2>
              <button>Hide</button>
            </div>
          </Col>
          <Col md={4}>
            <div className={s.examTool}>
              <p>Annotate</p>
              <p>More</p>
            </div>
          </Col>

          {/* <div className={s.examSection}>
            <h3>Section 1:Reading and Writing</h3>
            <div className={s.dropdown}>
              <DirectionsDropdown />
            </div>
          </div>
          <div className={s.examTime}>
            <h2>0:00</h2>
            <button>Hide</button>
          </div>
          <div className={s.examTool}>
            <p>Annotate</p>
            <p>More</p>
          </div> */}
        </div>
      </Row>
    </Container>
  );
}

export default ExamHeader;
