import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Link from "next/link";
import s from "./../../styles/ExamStatus.module.scss";

function ExamStatus() {
  const [examResult, setExamResult] = useState(null);

  useEffect(() => {
    fetchExamResult();
  }, []);

  const fetchExamResult = async () => {
    try {
      const response = await fetch(
        "http://tapoyren.morooq.az/api/CourseExamDataAnswer/PostExamAnswersAndGetExamResult",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId: 0, 
            courseExamId: 0, 
            courseExamDataId: 2600,
            questionsWithAnswers: [
              {
                courseExamDataId: 2600,
                questiontId: 85,
                questionTitle: "string",
                answerType: "single_choice",
                timeSpent: 0,
                status: "string",
                answerOptions: [
                  {
                    answerOptiontId: 315,
                    multipleChoiceAnswerIds: "string",
                    assignmentAnswer: "string",
                    answerOptionTitle: "string",
                  },
                ],
              },
              {
                courseExamDataId: 2600,
                questiontId: 86,
                questionTitle: "string",
                answerType: "single_choice",
                timeSpent: 0,
                status: "string",
                answerOptions: [
                  {
                    answerOptiontId: 333,
                    multipleChoiceAnswerIds: "string",
                    assignmentAnswer: "string",
                    answerOptionTitle: "string",
                  },
                ],
              },
              {
                courseExamDataId: 2600,
                questiontId: 87,
                questionTitle: "string",
                answerType: "single_choice",
                timeSpent: 0,
                status: "string",
                answerOptions: [
                  {
                    answerOptiontId: 337,
                    multipleChoiceAnswerIds: "string",
                    assignmentAnswer: "string",
                    answerOptionTitle: "string",
                  },
                ],
              },
              {
                courseExamDataId: 2600,
                questiontId: 88,
                questionTitle: "string",
                answerType: "single_choice",
                timeSpent: 0,
                status: "string",
                answerOptions: [
                  {
                    answerOptiontId: 318,
                    multipleChoiceAnswerIds: "string",
                    assignmentAnswer: "string",
                    answerOptionTitle: "string",
                  },
                ],
              },
              {
                courseExamDataId: 2600,
                questiontId: 89,
                questionTitle: "string",
                answerType: "single_choice",
                timeSpent: 0,
                status: "string",
                answerOptions: [
                  {
                    answerOptiontId: 323,
                    multipleChoiceAnswerIds: "string",
                    assignmentAnswer: "string",
                    answerOptionTitle: "string",
                  },
                ],
              },
              {
                courseExamDataId: 2600,
                questiontId: 90,
                questionTitle: "string",
                answerType: "single_choice",
                timeSpent: 0,
                status: "string",
                answerOptions: [
                  {
                    answerOptiontId: 339,
                    multipleChoiceAnswerIds: "string",
                    assignmentAnswer: "string",
                    answerOptionTitle: "string",
                  },
                ],
              },
              {
                courseExamDataId: 2600,
                questiontId: 91,
                questionTitle: "string",
                answerType: "single_choice",
                timeSpent: 0,
                status: "string",
                answerOptions: [
                  {
                    answerOptiontId: 326,
                    multipleChoiceAnswerIds: "string",
                    assignmentAnswer: "string",
                    answerOptionTitle: "string",
                  },
                ],
              },
              {
                courseExamDataId: 2600,
                questiontId: 92,
                questionTitle: "string",
                answerType: "single_choice",
                timeSpent: 0,
                status: "string",
                answerOptions: [
                  {
                    answerOptiontId: 328,
                    multipleChoiceAnswerIds: "string",
                    assignmentAnswer: "string",
                    answerOptionTitle: "string",
                  },
                ],
              },
              {
                courseExamDataId: 2600,
                questiontId: 93,
                questionTitle: "string",
                answerType: "single_choice",
                timeSpent: 0,
                status: "string",
                answerOptions: [
                  {
                    answerOptiontId:332,
                    multipleChoiceAnswerIds: "string",
                    assignmentAnswer: "string",
                    answerOptionTitle: "string",
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exam result.");
      }

      const data = await response.json();
      setExamResult(data);
    } catch (error) {
      console.error(error);
    }
  };

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
                <p className={s.score}>100%</p>
              </div>
            </div>
            <p className={s.totalExam}>Total exam: 1860 seconds</p>
            <p className={s.minimumScore}>Minimum score: 46%</p>
            <p className={s.yourScore}>Your score: 0%</p>
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
        <Row>
          <div>
            {examResult ? (
              <>
                <h2>Exam Result</h2>
                <p>Points: {examResult.points}</p>
                <p>Minimum Point: {examResult.minimumPoint}</p>
                <p>Total Exam Time: {examResult.totalExamTime}</p>
                <p>Status: {examResult.status}</p>
              </>
            ) : (
              <p>Loading exam result...</p>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ExamStatus;
