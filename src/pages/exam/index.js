import React from "react";
import Link from "next/link";
import s from "./../../styles/exam.module.scss";
import { Dropdown } from "react-bootstrap";

function Exam() {
  return (
    <>
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
     
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    </>
  );
}

export default Exam;
