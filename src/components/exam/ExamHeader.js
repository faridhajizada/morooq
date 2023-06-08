import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./../../styles/ExamHeader.module.scss";
import DirectionsDropdown from "../dropdown/DirectionsDropdown";
import { useRouter } from "next/router";

function ExamHeader() {
  const [time, setTime] = useState(1000); // Изначальное время в секундах (30 минут)
  const router = useRouter();

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1); // Уменьшаем время на 1 секунду
      }, 1000);

      // Очищаем интервал при размонтировании компонента или при достижении 0 секунд
      return () => {
        clearInterval(timer);
      };
    } else {
      // Redirect to "exam-status" page when time runs out
      router.push("/exam-status");
    }
  }, [time, router]);

  // Функция для форматирования времени в формате "минуты:секунды"
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Container fluid>
      <Row>
        <div className={s.examHeader}>
          <Col md={4}>
            <div className={s.examSection}>
              <div className={s.dropdown}>
                <DirectionsDropdown />
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={s.examTime}>
              <h2>{formatTime(time)}</h2>
              <button>Hide</button>
            </div>
          </Col>
          <Col md={4}>
            <div className={s.examTool}>
              <p>Annotate</p>
              <p>More</p>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default ExamHeader;
