import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/commonSection";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

const CheckOut = () => {
  return (
    <Helmet title="Checkout">
      <CommonSection>
        <section>
          <Container>
            <Row>
              <Col lg="8">
                <h6 className="mb-4 fw-bold">Billing Information</h6>
                <Form>
                  {" "}
                  <FormGroup className="form_group">
                    <input type="text" placeholder="Enter your Name" />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input type="email" placeholder="Enter your Name" />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input type="number" placeholder="Phone Number" />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input type="text" placeholder="Street Address" />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input type="text" placeholder="City" />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input type="text" placeholder="Postal code" />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input type="text" placeholder="Country" />
                  </FormGroup>
                </Form>
              </Col>

              <Col lg="4"></Col>
            </Row>
          </Container>
        </section>
      </CommonSection>
    </Helmet>
  );
};

export default CheckOut;
