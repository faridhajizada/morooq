import React from "react";
import s from "./../../././styles/footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <Container fluid className={s.footer}>
        <Row>
          <div className={s.footerMain}>
            <div className={s.footerLeft}>
              <Image
                className={s.logo}
                src={"/image/logo1.svg"}
                alt="Picture of the author"
                width={120}
                height={120}
              />
              <p>morooq, Inc.</p>
              <p>2035 Sunset Lake Road Suite B-2</p>
              <p>Newark, DE 19702</p>
              <p>2018-2023. All Rights Reserved.</p>
            </div>

            <div className={s.footerLeft}>
              <h6>SUPPORT</h6>
              <p>Frequently Ask Questions</p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
