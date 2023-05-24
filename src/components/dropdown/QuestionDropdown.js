import React from "react";
import { useState } from "react";
import s from "./../../styles/questionDropdown.module.scss";

function QuestionDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const questions = Array.from(
    { length: 8 },
    (_, index) => `Question ${index + 1} of 8`
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  return (
    <>
      <button className={s.dropdownButton} onClick={toggleDropdown}>
        {questions[activeButton] || questions[0]}
      </button>
      {isOpen && (
        <ul className={s.dropdownMenu}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((buttonIndex) => (
            <li
              key={buttonIndex}
              className={`${s.dropdownMenuItem} ${
                activeButton === buttonIndex ? s.activeButton : ""
              }`}
            >
              <button onClick={() => handleButtonClick(buttonIndex)}>
                {buttonIndex + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default QuestionDropdown;
