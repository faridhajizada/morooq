import React from "react";
import Link from "next/link";

function SatText() {
  return (
    <div>
        <button>
        <Link href="./">prev Home</Link>
      </button>
      <button>
        <Link href="./exam">next Exam</Link>
      </button>
    </div>
  );
}

export default SatText;
