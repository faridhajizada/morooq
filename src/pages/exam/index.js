import s from "./../../styles/exam.module.scss";
import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

function Exam() {
  const [width, setWidth] = useState(50); // Добавлено состояние width и функция setWidth

  const handleClick = (section) => {
    if (section === "examBodyLeft") {
      if (width === 60) {
        setWidth(50); // Если текущая ширина равна 60, устанавливаем дефолтное значение 50
      } else {
        setWidth(60); // Иначе, устанавливаем ширину 60
      }
    } else if (section === "examBodyRight") {
      if (width === 30) {
        setWidth(50); // Если текущая ширина равна 40, устанавливаем дефолтное значение 50
      } else {
        setWidth(30); // Иначе, устанавливаем ширину 40
      }
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <div className={s.examHeader}>
            <div className={s.examSection}>
              <h3>Section 1:Reading and Writing</h3>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Directions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className={s.dropdownBody}>
                    <p className={s.dropdownBodyText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className={s.examTime}>
              <h2>0:00</h2>
              <button>Hide</button>
            </div>
            <div className={s.examTool}>
              <p>Annotate</p>
              <p>More</p>
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div className={s.examBody}>
            <div className={s.examBodyLeft} style={{ width: `${width}%` }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button onClick={() => handleClick("examBodyLeft")}>Left</button>
            </div>
            <div
              className={s.examBodyRight}
              style={{ width: `${100 - width}%` }}
            >
              <div className={s.BodyRightContent}>
                <div className={s.count} md={1}>
                  <p>1</p>
                </div>
                <div className={s.markReview} md={1}>
                  <p>Mark for Review</p>
                </div>
                <div className={s.abc} md={10}>
                  <p>ABC</p>
                </div>
              </div>
              <div className={s.BodyRidghtQuestion}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?
                </p>
              </div>
              <div className={s.BodyRightAnswer}>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>A</p>
                  <p>BMW</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>B</p>
                  <p>Mercedes</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>C</p>
                  <p>Ferrari</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>D</p>
                  <p>Porshe</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>A</p>
                  <p>BMW</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>B</p>
                  <p>Mercedes</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>C</p>
                  <p>Ferrari</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>D</p>
                  <p>Porshe</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>A</p>
                  <p>BMW</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>B</p>
                  <p>Mercedes</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>C</p>
                  <p>Ferrari</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>D</p>
                  <p>Porshe</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>A</p>
                  <p>BMW</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>B</p>
                  <p>Mercedes</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>C</p>
                  <p>Ferrari</p>
                </div>
                <div className={s.answerBody}>
                  <p className={s.answerVariant}>D</p>
                  <p>Porshe</p>
                </div>
              </div>
              <button onClick={() => handleClick("examBodyRight")}>
                Right
              </button>
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div className={s.examFooter}>
            <div className={s.examFooterLeft}>
              <p> Sol Lee</p>
            </div>
            <div className={s.examFooterCenter}>
              <button>Question 1 of 8</button>
            </div>
            <div className={s.examFooterRight}>
              <button>Next</button>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Exam;
