import React from "react";
import styles from "./../../../styles/welcome.module.scss";
import Image from "next/image";

function WelcomeHeader() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.headerTop}>
              <div className={styles.headerLogo}>
                <Image
                  src="./../../img/logo.svg"
                  alt="Logo"
                  width={10}
                  height={10}
                />
              </div>
              <div className={styles.headerSignIn}>
                <h1 className={styles.userName}>Hacizade Farid</h1>
                <i class="fa-solid fa-user"></i>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.headerText}>
              <p>
                Welcome,Farid! Take a practice test and get ready for test day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeHeader;
