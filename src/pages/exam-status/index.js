import React from "react";
import { Container, Row } from "react-bootstrap";
import s from "./../../styles/ExamStatus.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function ExamStatus() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Check if the user is navigating back
      if (url === "/exam") {
        // Redirect the user to the main page
        router.push("/");
      }
    };

    // Listen to the router's route change event
    router.events.on("routeChangeStart", handleRouteChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);
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
