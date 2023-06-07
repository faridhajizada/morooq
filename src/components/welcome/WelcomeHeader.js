import React from "react";
import styles from "./../../styles/welcome.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Container, Row } from "react-bootstrap";

function WelcomeHeader() {
  return (
    <>
      <Container fluid>
        <Row>
          <div className={styles.header}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.headerTop}>
                  <div className={styles.headerLogo}>
                    <Image
                      src="./image/logo.svg"
                      alt="Logo"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className={styles.headerSignIn}>
                    <h2 className={styles.userName}>Hacizade Farid</h2>
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.headerText}>
                  <p>
                    Welcome,Farid! Take a practice test and get ready for test
                    day.
                  </p>
                </div>
              </div>
            </div>
         
          </div>
        </Row>
      </Container>
    </>
  );
}

export default WelcomeHeader;
