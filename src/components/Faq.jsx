import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import faqHand from "../assets/images/png/faqHand.png";
import faqLeftPos from "../assets/images/png/faqLeftPos.png";

const Faq = () => {
  return (
    <>
      <Container>
        <div className=" py-5">
          <Row className=" align-items-center">
            <Col xl="6">
              <div className=" position-relative">
                <img className=" w-100" src={faqHand} alt="faqHand" />
                <img
                  className=" w-50 position-absolute left_49"
                  src={faqLeftPos}
                  alt="faqLeftPos"
                />
              </div>
            </Col>
            <Col lg="6">
              <Accordion
                defaultActiveKey={["0"]}
                alwaysOpen
                className="accordin_box"
              >
                <Accordion.Item eventKey="0" className=" accordin_bg my-3">
                  <Accordion.Header className=" fs_xl text-white ff_gilory accordin_bg">
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body className=" text-white fs_xsm fw_medium">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className=" accordin_bg">
                  <Accordion.Header className=" fs_xl text-white ff_gilory">
                    What are the three types of cyber threats?
                  </Accordion.Header>
                  <Accordion.Body className=" text-white fs_xsm fw_medium">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className=" accordin_bg my-3">
                  <Accordion.Header className=" fs_xl text-white ff_gilory">
                    How can you protect yourself from cyber security?
                  </Accordion.Header>
                  <Accordion.Body className=" text-white fs_xsm fw_medium">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className=" accordin_bg my-3">
                  <Accordion.Header className=" fs_xl text-white ff_gilory">
                    What would happen without cyber security?
                  </Accordion.Header>
                  <Accordion.Body className=" text-white fs_xsm fw_medium">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className=" accordin_bg my-3">
                  <Accordion.Header className=" fs_xl text-white ff_gilory">
                    Is cyber security a social or governance issue?
                  </Accordion.Header>
                  <Accordion.Body className=" text-white fs_xsm fw_medium">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Faq;
