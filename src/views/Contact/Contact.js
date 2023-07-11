import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import "./contact.scss";
import { Icon } from "@iconify/react";
import Button from "components/Button/Button";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Row className="gx-5" style={{ width: "90%" }} justify="center">
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <div className="author">
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={require("assets/img/amit.png")}
                  />
                  {/* <h5 className="text-shadow">Amit Badala</h5> */}
                  <h1 className="signature">Amit Badala</h1>
                  <p className="">hello@amitbadala.com</p>
                </div>
                <p className="text-center">
                  "I take high pride in my work, deliever high quality output"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <a
                        href="https://www.linkedin.com/in/amitbadala/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          icon="bi:linkedin"
                          color="#333"
                          fontSize={32}
                          style={{ marginRight: 5 }}
                        />
                      </a>
                      {/* <Icon icon="mdi:resume" color="#333" fontSize={32} /> */}
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <a
                        href="https://github.com/amitbadala"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon icon="jam:github" color="#333" fontSize={36} />
                      </a>
                    </Col>
                    <Col className="mr-auto" lg="3">
                      <a
                        href="https://github.com/amitbadala"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          icon="ri:medium-fill"
                          color="#333"
                          fontSize={41}
                        />
                      </a>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col
            md={{
              offset: 1,
              size: 7,
            }}
          >
            <div className="contact-form">
              <div className="headline">
                <h1>Let's Connect</h1>
                <span className="period"></span>
              </div>
              <p>
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>
              <br />
              <Row>
                <Col md="5">
                  <FormGroup>
                    <Label for="name">Your Name</Label>
                    <Input
                      className="input-field"
                      placeholder="Enter your name"
                    />
                  </FormGroup>
                </Col>
                <br />{" "}
                <Col md="7">
                  <FormGroup>
                    <Label for="email">Email Address </Label>
                    <Input
                      className="input-field"
                      placeholder="Enter your name"
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label for="message">Your Message</Label>
                    <Input
                      className="input-field"
                      id="exampleText"
                      name="text"
                      type="textarea"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={() => alert()}>
                    <Icon
                      icon="ri:send-plane-fill"
                      color="springgreen"
                      fontSize={20}
                    />{" "}
                    SEND{" "}
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;

// Since 2005, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.
