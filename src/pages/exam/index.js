import s from "./../../styles/exam.module.scss";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import DirectionsDropdown from "./../../components/dropdown/DirectionsDropdown";
import QuestionDropdown from "./../../components/dropdown/QuestionDropdown";

export const getStaticProps = async () => {
  const res = await fetch(
    "http://tapoyren.morooq.az/api/ExamQuestion/GetCourseExamByCourseExamId?courseExamId=3"
  );
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

function Exam({ users }) {
  const [width, setWidth] = useState(50);
  const [isAbcButtonVisible, setIsAbcButtonVisible] = useState(false);
  const [isAbcActive, setIsAbcActive] = useState([false, false, false, false]);
  const [isLike, setIsLike] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  const handleAbcUndo = (index) => {
    let newAbcActive = [...isAbcActive];
    newAbcActive[index] = !newAbcActive[index];
    setIsAbcActive(newAbcActive);
  };

  const handleAbcButtonClick = () => {
    setIsAbcButtonVisible(!isAbcButtonVisible);
  };

  const handleAnswerClick = (event) => {
    const selectedAnswerBodyElement = event.currentTarget;
    const answerBodies = document.querySelectorAll(`.${s.answerBody}`);
    answerBodies.forEach((answerBody) => {
      answerBody.classList.remove(s.redBorder);
    });
    selectedAnswerBodyElement.classList.add(s.redBorder);
  };

  const handleClick = (section) => {
    if (section === "examBodyLeft") {
      if (width === 60) {
        setWidth(50);
      } else {
        setWidth(60);
      }
    } else if (section === "examBodyRight") {
      if (width === 30) {
        setWidth(50);
      } else {
        setWidth(30);
      }
    }
  };

  const handleNextName = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <div className={s.examHeader}>
            <div className={s.examSection}>
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
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div className={s.examBody}>
            <div className={s.examBodyLeft} style={{ width: `${width}%` }}>
              {users.slice(0, 1).map((user) => (
                <li key={users[currentIndex].questiontId}>
                  <code
                    dangerouslySetInnerHTML={{
                      __html: users[currentIndex].questionTitle,
                    }}
                  />
                </li>
              ))}

              <button onClick={() => handleClick("examBodyLeft")}>Left</button>
            </div>
            <div
              className={s.examBodyRight}
              style={{ width: `${100 - width}%` }}
            >
              <div className={s.BodyRightContent}>
                <div className={s.count}>
                  <p>1</p>
                </div>
                <div className={s.markReview}>
                  <button
                    className={`${s.markLikeButton} ${isLike ? s.isLike : ""}`}
                    onClick={handleLike}
                  >
                    Like
                  </button>
                  <p> Mark for Review</p>
                </div>
                <div className={s.abc}>
                  <button
                    className={s.abcButton}
                    onClick={handleAbcButtonClick}
                  >
                    ABC
                  </button>
                </div>
              </div>
              <div className={s.BodyRidghtQuestion}>
                <li key={users[currentIndex].questiontId}>
                  <p>{users[currentIndex].answerType}</p>
                </li>
              </div>
              <div className={s.BodyRightAnswer}>
                {[0, 1, 2, 3].map((index) => (
                  <div className={s.answerBodyAbc} key={index}>
                    <div className={s.answerBody} onClick={handleAnswerClick}>
                      <p className={s.answerVariant}>A</p>
                      <li key={users[currentIndex].questiontId}>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              users[currentIndex].answerOptions[index]
                                .answerOptionTitle,
                          }}
                        />
                      </li>
                    </div>
                    <div>
                      {isAbcButtonVisible && (
                        <button
                          className={`${s.abcAnswerButton} ${
                            isAbcActive[index] ? s.answerBodyActive : ""
                          }`}
                          onClick={() => handleAbcUndo(index)}
                        >
                          abc
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className={s.rightButton}
                onClick={() => handleClick("examBodyRight")}
              >
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
              <div className={s.dropdown}>
                <QuestionDropdown />
              </div>
            </div>
            <div className={s.examFooterRight}>
              <button onClick={handleNextName}>Next</button>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Exam;
