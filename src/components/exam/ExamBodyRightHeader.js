import React, { useState } from "react";
import s from "./../../styles/ExamBodyRightHeader.module.scss";

function ExamBodyRightHeader({ currentIndex, handleToggleAbcButtonVisible }) {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className={s.BodyRightContent}>
      <div className={s.count}>
        <p className={s.countIndex} >{currentIndex + 1}</p>
      </div>
      <div className={s.markReview}>
        <button
          className={`${s.markLikeButton} ${isLike ? s.isLike : ""}`}
          onClick={handleLike}
        >
          Like
        </button>
        <p className={s.markText}> Mark for Review</p>
      </div>
      <div className={s.abc}>
        <button className={s.abcButton} onClick={handleToggleAbcButtonVisible}>
          ABC
        </button>
      </div>
    </div>
  );
}

export default ExamBodyRightHeader;
