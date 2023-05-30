import s from "./../../styles/exam.module.scss";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import DirectionsDropdown from "./../../components/dropdown/DirectionsDropdown";
import QuestionDropdown from "./../../components/dropdown/QuestionDropdown";

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://tapoyren.morooq.az/api/ExamQuestion/GetCourseExamByCourseExamId?courseExamId=2"
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
  const [isLike, setIsLike] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedABCOptions, setSelectedABCOptions] = useState(
    Array(users.length).fill(null)
  );

  const handleLike = () => {
    setIsLike(!isLike);
  };

  const handleToggleAbcActive = (questionIndex, optionIndex) => {
    setSelectedABCOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[questionIndex] = optionIndex;
      return newOptions;
    });
  };

  const handleToggleAbcButtonVisible = () => {
    setIsAbcButtonVisible(!isAbcButtonVisible);
  };

  const handleAnswerClick = (event) => {
    const selectedAnswerBodyElement = event.currentTarget;
    const answerIndex = parseInt(selectedAnswerBodyElement.dataset.index);

    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[currentIndex] = answerIndex;
      return updatedAnswers;
    });

    setSelectedABCOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[currentIndex] = null;
      return newOptions;
    });
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


  const handleNextQuestion = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleFinishExam = () => {
    // Logic for finishing the exam
    console.log("Exam finished!");
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
              {users.slice(currentIndex, currentIndex + 1).map((user) => (
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
                  <p>{currentIndex + 1}</p>
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
                    onClick={handleToggleAbcButtonVisible}
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
                    <div
                      className={`${s.answerBody} ${
                        selectedAnswers[currentIndex] === index
                          ? s.redBorder
                          : ""
                      }`}
                      onClick={handleAnswerClick}
                      data-index={index}
                    >
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
                            selectedABCOptions[currentIndex] === index
                              ? s.answerBodyActive
                              : ""
                          }`}
                          onClick={() =>
                            handleToggleAbcActive(currentIndex, index)
                          }
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
                <QuestionDropdown
                  currentIndex={currentIndex}
                  updateCurrentIndex={setCurrentIndex}
                  questionsData={users}
                />
              </div>
            </div>
            <div className={s.examFooterRight}>
              {currentIndex !== 0 && (
                <button onClick={handlePrevQuestion}>Prev</button>
              )}
              {currentIndex === users.length - 1 ? (
                <button onClick={handleFinishExam}>Finish</button>
              ) : (
                <button onClick={handleNextQuestion}>Next</button>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Exam;
