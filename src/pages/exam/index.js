import React from "react";
import Link from "next/link";
import s from "./../../styles/exam.module.scss";

function Exam() {
  return (
    <>
      <div className={s.examHeader }>
        <div className={s.examSection}>
          <h3>Section 1:Reading and Writing</h3>
          <p>Directions</p>
        </div>
        <div className={s.examTime}>
          <p>0:00</p>
          <button>Hidden</button>
        </div>
        <div className={s.examTool}>
          <p>Annotate</p>
          <p>More</p>
        </div>
      </div>
    </>
  );
}

export default Exam;
