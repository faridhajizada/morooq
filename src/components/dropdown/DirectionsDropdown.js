import React from "react";
import s from "./../../styles/directionsDropdown.module.scss";
import { useState } from "react";

function DirectionsDropdown() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={s.dropdownButton} onClick={toggleDropdown}>
        Directions
      </button>
      {isOpen && (
        <ul className={s.dropdownMenu}>
          <li className={s.dropdownMenuItem}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className={s.closeDirectionsDropdown}
              onClick={closeDropdown}
            >
              Close
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default DirectionsDropdown;
