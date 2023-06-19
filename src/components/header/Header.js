import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Container, Row } from "react-bootstrap";

import styles from "./../../styles/header.module.scss";

function Header() {
  return (
    <header>
      <Container fluid>
        <Row>
          <div className={styles.header}>
            <div className={styles.headerLogo}>
              <Link href="/">
                <Image
                  src="./image/logo.svg"
                  alt="Logo"
                  width={150}
                  height={70}
                />
              </Link>
            </div>
            <div className={styles.headerSignIn}>
              <h2 className={styles.userName}>Hacizade Farid</h2>
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
