import React from "react";

import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

import styles from "./../../styles/welcome.module.scss";

function WelcomePractice() {
  return (
    <div className={styles.practice}>
      <Container fluid className="pt-5 pb-5">
        <Row>
          <div className={styles.yourTest}>
            <h3 className={styles.title}>Practice and Prepare </h3>
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

        <Row className="pt-5 justify-content-center">
          <Col md={3} className="d-flex justify-content-center">
            <Card
              style={{ width: "18rem" }}
              className={styles.cardBorderRadius}
            >
              <Card.Body className="text-center">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="d-flex justify-content-center">
            <Card
              style={{ width: "18rem" }}
              className={styles.cardBorderRadius}
            >
              <Card.Body className="text-center">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="d-flex justify-content-center">
            <Card
              style={{ width: "18rem" }}
              className={styles.cardBorderRadius}
            >
              <Card.Body className="text-center">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="d-flex justify-content-center">
            <Card
              style={{ width: "18rem" }}
              // className="mx-auto"
              className={styles.cardBorderRadius}
            >
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body className="text-center">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="pt-5 ">
          <div className={styles.satTestBtn}>
            <Link href="/sat-test">
              <button>Next Sat-test</button>
            </Link>
          </div>
        </Row>
        
      </Container>
    </div>
  );
}

export default WelcomePractice;
