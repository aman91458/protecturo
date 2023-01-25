import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import our_pro_1 from "../assets/images/png/our_product_1.png";
import our_pro_2 from "../assets/images/png/our_product_2.png";
import our_pro_3 from "../assets/images/png/our_product_3.png";
import right_top from "../assets/images/png/right_.png";
import logo_right from "../assets/images/png/pos_logo_right.png";
import BtnBox from "./BtnBox";

const OurProducts = () => {
  return (
    <>
      <div className="py-5 position-reletive">
        <img
          className="position-absolute end-0 top_our_pro d-none d-lg-block z_index_-1"
          src={right_top}
          alt="img"
        />
        <img
          className=" position-absolute pos_logo_right z_index_-1 d-none d-lg-block end-0"
          src={logo_right}
          alt="logo_right"
        />
        <Container>
          <div className="text-center py-5">
            <h2 className=" ff_gilroy fw-bold fs_xl tx_neutral ">
              Our products
            </h2>
            <p className=" ff_gilroy fw-bold fs_4xl tx_secondary">
              Allow us to secure your data with Protecturo’s products
            </p>
          </div>
          <div className="max_w_1200px">
            <Row className="justify-content-center">
              <Col sm="6" md="4">
                <div className="bg_box">
                  <img className="w-100" src={our_pro_1} alt="img" />
                  <div className="text-center py-5 px-4">
                    <p className=" ff_gilroy fw-semibold fs_xl tx_primary">
                      eSIM
                    </p>
                    <p className="ff_gilroy fw_medium fs_xsm tx_light">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                    <BtnBox />
                  </div>
                </div>
              </Col>
              <Col sm="6" md="4">
                <div className="bg_box mt-5 mt-sm-0">
                  <img className="w-100" src={our_pro_2} alt="img" />
                  <div className="text-center py-5 px-4">
                    <p className=" ff_gilroy fw-semibold fs_xl tx_primary">
                      SIM card
                    </p>
                    <p className="ff_gilroy fw_medium fs_xsm tx_light">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                    <BtnBox />
                  </div>
                </div>
              </Col>
              <Col sm="6" md="4">
                <div className="bg_box mt-5 mt-md-0">
                  <img className="w-100" src={our_pro_3} alt="img" />
                  <div className="text-center py-5 px-4">
                    <p className=" ff_gilroy fw-semibold fs_xl tx_primary">
                      Mobile Wifi Hotspot
                    </p>
                    <p className="ff_gilroy fw_medium fs_xsm tx_light">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                    <BtnBox />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurProducts;
