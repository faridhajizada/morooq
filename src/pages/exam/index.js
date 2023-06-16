import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import s from "./../../styles/exam.module.scss";

import ExamBodyRightHeader from "../../components/exam/ExamBodyRightHeader";
import ExamHeader from "../../components/exam/ExamHeader";
import ExamFooter from "../../components/exam/ExamFooter";

// getStaticProps
export const getStaticProps = async () => {
  const res = await fetch(
    "http://tapoyren.morooq.az/api/ExamQuestion/GetCourseExamByCourseExamId?courseExamId=10"
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      users: data,
    },
  };
};

function Exam({ users }) {
  const [width, setWidth] = useState(50);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAbcButtonVisible, setIsAbcButtonVisible] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedABCOptions, setSelectedABCOptions] = useState(
    Array(users.length).fill(null)
  );

  const handleToggleAbcButtonVisible = () => {
    setIsAbcButtonVisible(!isAbcButtonVisible);
  };

  const handleToggleAbcActive = (questionIndex, optionIndex) => {
    setSelectedABCOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[questionIndex] = optionIndex;
      return newOptions;
    });
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

  return (
    <>
      <ExamHeader />

      <Container fluid>
        <Row>
          <div className={s.examBody}>
            <div className={s.examBodyLeft} style={{ width: `${width}%` }}>
              <ul>
              {users.slice(currentIndex, currentIndex + 1).map((user) => (
  <li key={user.questionId}>
    <div
      dangerouslySetInnerHTML={{
        __html: user.questionTitle,
      }}
    />
  </li>
))}

              </ul>

              <button onClick={() => handleClick("examBodyLeft")}>Left</button>
            </div>
            <div
              className={s.examBodyRight}
              style={{ width: `${100 - width}%` }}
            >
              <ExamBodyRightHeader
                users={users}
                currentIndex={currentIndex}
                handleToggleAbcButtonVisible={handleToggleAbcButtonVisible}
              />

              <div className={s.BodyRidghtQuestion}>
                <ul>
                  <li key={users[currentIndex].questionId}>
                    <p>{users[currentIndex].answerType}</p>
                  </li>
                </ul>
              </div>

              <div className={s.BodyRightAnswer}>
                {users[currentIndex].answerOptions.map(
                  (answerOption, index) => (
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
                        <div
                          key={users[currentIndex].questionId}
                          dangerouslySetInnerHTML={{
                            __html: answerOption?.answerOptionTitle,
                          }}
                        />
                        <div
                          key={users[currentIndex].questionId}
                          dangerouslySetInnerHTML={{
                            __html: answerOption?.answerOptiontId,
                          }}
                        />
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
                  )
                )}
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

      <ExamFooter
        users={users}
        currentIndex={currentIndex}
        handlePrevQuestion={handlePrevQuestion}
        handleNextQuestion={handleNextQuestion}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}

export default Exam;
