import React from "react";
import styles from "./../../styles/welcome.module.scss";

import { Container, Row } from "react-bootstrap";

function WelcomeHeader() {
  return (
    <>
      <Container fluid>
        <Row>
          <div className={styles.header}>
            <div className={styles.headerText}>
              <p>
                Welcome,Farid! Take a practice test and get ready for test day.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default WelcomeHeader;
