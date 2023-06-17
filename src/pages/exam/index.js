import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import s from "./../../styles/exam.module.scss";

import ExamBodyRightHeader from "../../components/exam/ExamBodyRightHeader";
import ExamHeader from "../../components/exam/ExamHeader";
import ExamFooter from "../../components/exam/ExamFooter";

async function addExamDataToCourse(
  studentId,
  courseExamId,
  questionsWithAnswers
) {
  const url =
    "http://tapoyren.morooq.az/api/CourseExamData/AddExamDataToCourse";

  const requestData = {
    studentId: studentId,
    courseExamId: courseExamId,
    courseExamDataId: 0,
    questionsWithAnswers: questionsWithAnswers,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Failed to add exam data to the course.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export const getStaticProps = async () => {

  const randomCourseExamId = Math.floor(Math.random() * 100) + 1;

  const res = await fetch(
    // "http://tapoyren.morooq.az/api/ExamQuestion/GetCourseExamByCourseExamId?courseExamId=10"
    `http://tapoyren.morooq.az/api/ExamQuestion/GetCourseExamByCourseExamId?courseExamId=${randomCourseExamId}`

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
  const [studentId, setStudentId] = useState(1364);

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

  const handleAnswerClick = async (event) => {
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

    const questionsWithAnswers = [
      {
        courseExamDataId: 0,
        questiontId: users[currentIndex].questiontId,
        // questionTitle: users[currentIndex].questionTitle,
        answerType: users[currentIndex].answerType,
        timeSpent: 0,
        status: "answered",
        answerOptions: [
          {
            answerOptiontId:
              users[currentIndex].answerOptions[answerIndex].answerOptiontId,
            multipleChoiceAnswerIds: "",
            assignmentAnswer: "",
            answerOptionTitle:
              users[currentIndex].answerOptions[answerIndex].answerOptionTitle,
          },
        ],
      },
    ];

    await addExamDataToCourse(studentId, 10, questionsWithAnswers);
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
                  <li key={user.questiontId}>
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
                  <li key={users[currentIndex].questiontId}>
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
                          dangerouslySetInnerHTML={{
                            __html: answerOption?.answerOptionTitle,
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
      />
    </>
  );
}

export default Exam;
