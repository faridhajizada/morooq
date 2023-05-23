import React from "react";
import { useState } from "react";
import s from "./../../styles/questionDropdown.module.scss";

function QuestionDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className={s.dropdownButton} onClick={toggleDropdown}>
        Question 1 of 8
      </button>
      {isOpen && (
        <ul className={s.dropdownMenu}>
          <li className={s.dropdownMenuItem}>
            <p>1</p>
          </li>
          <li className={s.dropdownMenuItem}>
            <p>2</p>
          </li>
          <li className={s.dropdownMenuItem}>
            <p>3</p>
          </li>
          <li className={s.dropdownMenuItem}>
            <p>4</p>
          </li>
          <li className={s.dropdownMenuItem}>
            <p>5</p>
          </li>
          <li className={s.dropdownMenuItem}>
            <p>6</p>
          </li>
          <li className={s.dropdownMenuItem}>
            <p>7</p>
          </li>
          <li className={s.dropdownMenuItem}>
            <p>8</p>
          </li>
        </ul>
      )}
    </>
  );
}

export default QuestionDropdown;
