import React from "react";
import { Container, Row } from "react-bootstrap";
import s from "./../../styles/ExamStatus.module.scss";
import Link from "next/link";

function ExamStatus() {
  return (
    <div className={s.examStatus}>
      <Container>
        <Row>
          <div className={s.examStatusFailed}>
            <h1>
              Exam Status: <span>FAILED</span>
            </h1>
          </div>
        </Row>
        <Row>
          <div className={s.examStatusFailedBody}>
            <div className={s.borderScore}>
              <div className={s.scoreRadius}>
                <p className={s.score}> 100%</p>
              </div>
            </div>
            <p className={s.totalExam}>Total exam : 1860 seconds</p>
            <p className={s.minimumScore}>Minimum score : 46%</p>
            <p className={s.yourScore}>Your score : 0%</p>
          </div>
        </Row>
        <Row>
          <div className={s.examStatusBtn}>
            <div className={s.BtnResult}>
              <Link href="./">
                <button className={s.examStatusBtnResult}>Result</button>
              </Link>
            </div>

            <div className={s.BtnBackToHome}>
              <Link href="./">
                <button className={s.examStatusBtnBackToHome}>
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ExamStatus;
