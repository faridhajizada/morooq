import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./../../styles/welcome.module.scss";

function WelcomeYourTest() {
  return (
    <div className={styles.main}>
      <Container fluid className="pt-5 pb-5">
        <Row>
          <div className={styles.yourTest}>
            <h3 className={styles.title}> Your Test</h3>
            <div className={styles.activePast}>
              <div className={styles.activeBtn}>
                <button>Active</button>
              </div>
              <div className={styles.pastPast}>
                <button>Past</button>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <div className={styles.testCard}>
              <div className={styles.testCardTitle}>
                <div className={styles.testCardDescription}>
                  <h5>You Have No Upcoming Test</h5>
                  <p>
                    You can start a new test by clicking on the button below or
                    clicking on the "Start a new test" button in the sidebar.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default WelcomeYourTest;
