import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import faqHand from "../assets/images/png/faqHand.png";
import faqLeftPos from "../assets/images/png/faqLeftPos.png";

const Faq = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="6">
            <div className=" position-relative">
              <img className=" position-absolute" src={faqHand} alt="faqHand" />
              <img src={faqLeftPos} alt="faqLeftPos" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
