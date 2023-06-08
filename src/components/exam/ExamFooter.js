import React from "react";
import { Container, Row } from "react-bootstrap";
import QuestionDropdown from "../dropdown/QuestionDropdown";
import s from "./../../styles/ExamFooter.module.scss";
import Link from "next/link";

function ExamFooter({
  users,
  currentIndex,
  handlePrevQuestion,
  handleNextQuestion,
  handleFinishExam,
  setCurrentIndex,
}) {
  const updateCurrentIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
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
                updateCurrentIndex={updateCurrentIndex}
                questionsData={users}
              />
            </div>
          </div>
          <div className={s.examFooterRight}>
            {currentIndex !== 0 && (
              <button onClick={handlePrevQuestion}>Prev</button>
            )}
            {currentIndex === users.length - 1 ? (
              <Link href="/exam-status">
                <button onClick={handleFinishExam}>Finish</button>
              </Link>
            ) : (
              <button onClick={handleNextQuestion}>Next</button>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default ExamFooter;
