import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import s from "./../../styles/satTest.module.scss";

function SatText() {
  return (
    <div className={s.satTest}>
      <Container fluid>

        <Row>
          <div className={s.satTitle}>
            <h1>Sat Test Preview</h1>
          </div>
        </Row>

        <Row>
          <Col md={4}></Col>

          <Col md={4}>
            <div className={s.satContent}>
              <div className={s.satExplore}>
                <h3>Explore the Morooq App </h3>
                <p>
                  The Morooq app is a free, official SAT® practice resource that
                  allows you to take a full-length practice test, score your
                  results, and get personalized practice recommendations.
                </p>
              </div>
              <div className={s.satTake}>
                <h3>Take Your Time </h3>
                <p>
                  The SAT is a timed test, so allow yourself 3 hours and 20
                  minutes for the entire test. If you have the time, take a few
                  minutes to look over the test. Try to relax and stay calm.
                </p>
              </div>
              <div className={s.satTechnology}>
                <h3>Test Your Assistive Technology </h3>
                <p>
                  If you’re approved to test with accommodations, your testing
                  experience may differ from the standard test experience.
                </p>
              </div>
            </div>
            <div className={s.nextPrev}>
              <div className={s.prev}>
                <Link href="/">
                  <button>Prev</button>
                </Link>
              </div>
              <div className={s.next}>
                <Link href="/exam">
                  <button>Next</button>
                </Link>
              </div>
            </div>
          </Col>
          
          <Col md={4}></Col>
        </Row>

      </Container>
    </div>
  );
}

export default SatText;
