import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import stay_conected from "../assets/images/svg/mobile.svg";
import international from "../assets/images/svg/call_.svg";
import mobile_in_hand from "../assets/images/svg/mobile_in_hand.svg";
import data_plans from "../assets/images/svg/data_plan.svg";
import mind_blow from "../assets/images/png/mind_blow.png";
import dots_left from "../assets/images/png/left_dots.png";
import left_ from "../assets/images/png/left_.png";

const OurProBen = () => {
  return (
    <>
      <div className="py-5 position-relative">
        <img
          className=" position-absolute pos_left_ start-0 z_index_-1 d-none d-lg-block"
          src={left_}
          alt="image"
        />
        <Container className="py-5">
          <Row className="py-5">
            <Col lg="6">
              <h2 className=" ff_gilroy fw-bold fs_xl tx_neutral ">
                Our product benefits
              </h2>
              <p className=" ff_gilroy fw-bold fs_4xl tx_secondary">
                What you will get with Protecturo
              </p>
              <p className="ff_gilroy fw_medium fs_lg tx_light">
                Your creativity is endless. Your IoT project shouldn't be held
                back by cellular connectivity. Let's build a new unicorn
                together.
              </p>
              <Row className="justify-content-between">
                <Col sm="5" lg="6" xl="5">
                  <div>
                    <img src={stay_conected} alt="img" />
                    <p className=" ff_gilroy fw-semibold fs_lg tx_secondary ">
                      Stay connected
                    </p>
                    <p className=" ff_gilroy fw_medium fs_xsm tx_light">
                      Travel and stay connected without roaming or surprise
                      bills.
                    </p>
                  </div>
                </Col>
                <Col sm="5" lg="6" xl="5">
                  <div>
                    <img src={international} alt="img" />
                    <p className=" ff_gilroy fw-semibold fs_lg tx_secondary ">
                      International
                    </p>
                    <p className=" ff_gilroy fw_medium fs_xsm tx_light">
                      Keep your local SIM card to receive all phone calls
                      everywhere.
                    </p>
                  </div>
                </Col>
                <Col sm="5" lg="6" xl="5">
                  <div>
                    <img src={mobile_in_hand} alt="img" />
                    <p className=" ff_gilroy fw-semibold fs_lg tx_secondary ">
                      Ease to get
                    </p>
                    <p className=" ff_gilroy fw_medium fs_xsm tx_light">
                      Purchase and install your eSIM in just one minute.
                    </p>
                  </div>
                </Col>
                <Col sm="5" lg="6" xl="5">
                  <div>
                    <img src={data_plans} alt="img" />
                    <p className=" ff_gilroy fw-semibold fs_lg tx_secondary ">
                      Data plans
                    </p>
                    <p className=" ff_gilroy fw_medium fs_xsm tx_light">
                      Get unlimited data plans in according to destinations.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="6">
              <div className=" position-relative">
                <img
                  className=" position-absolute dot_pos d-none d-xxl-block"
                  src={dots_left}
                  alt=""
                />
                <img
                  className=" w-100 pt-5 pt-lg-0"
                  src={mind_blow}
                  alt="image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurProBen;
