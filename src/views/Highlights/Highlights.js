import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import "./highlights.scss";

const Highlights = () => {
  return (
    <section className="section" id="highlights">
      <div className="container">
        <div className="parent" id="user">
          <div className="block frame-1x1 white-bg">
            <div className="stats-num">4+</div>
            <div className="stats-desc" style={{ fontSize: 15 }}>
              yrs of Remote work experience, exemplifying self-initiative & a
              high sense of responsibility and ownership as an engineer
            </div>
          </div>
          <div className="block frame-2x1 dark-bg">
            <div className="stats-num">2x</div>
            <div className="stats-desc" style={{ fontSize: 16 }}>
              faster frontend page load speed through advanced techniques such
              as lazy loading, code splitting, image optimization, and SQL query
              optimization, which minimized database trips and enhanced API
              response time. ⚡
            </div>
          </div>
          <div class="block frame-1x2 green-bg">
            <div className="stats-num">600%</div>
            <div className="stats-desc" style={{ fontSize: 19 }}>
              improvement in test suite performance post-refactoring
              {` >`} 2000 lines of python code, slashing the testing cycle time
              from 45 minutes down to 7 minutes, significantly saving developer
              time.
            </div>
          </div>
          <div class="block frame-1x1 dark-bg">
            {" "}
            <div className="stats-num">1st</div>
            <div className="stats-desc">
              place laureate in a web design contest hosted by TechNEXT India 🇮🇳
            </div>
          </div>
          <div class="block frame-2x1 green-bg">
            <div className="stats-num">{`>15%`}</div>
            <div className="stats-desc">
              revenue boost achieved by independently building a mobile
              application for e-commerce businesses which helped in
              identification and tracking of RTO packages 💰
            </div>
          </div>
          <div class="block frame-2x1 dark-bg">
            <div className="stats-num">130%</div>
            <div className="stats-desc" style={{ fontSize: 16 }}>
              increased submission rates through careful UX monitoring and
              analysis of the dropoff funnel during form completion, combined
              with strategic UI updates that led to higher engagement and
              submission rates
            </div>
          </div>

          <div class="block frame-3x1 white-bg">
            {" "}
            <div className="stats-num">25+</div>
            <div className="stats-desc" style={{ fontSize: 16 }}>
              informative Blogs authored covering topics ranging from
              programming & AI to personal learning
            </div>
          </div>
          <div class="block frame-1x2 white-bg">
            {" "}
            <div className="stats-num">23+</div>
            <div className="stats-desc">
              projects completed, most of them built from the ground up. My
              experience spans the entire software development process, from
              initial wireframing to final deployment. Always eager to learn and
              take on tasks outside my area of expertise.{" "}
            </div>
          </div>
          <div class="block frame-1x1">
            <div className="stats-num">8</div>
            <div className="stats-desc">
              engineers mentored, with a specific emphasis on Frontend
              development
            </div>
          </div>
          <div class="block frame-1x1 green-bg-only"></div>
          {/* <div class="block frame-2x2 slateBlue">9</div>
        <div class="block frame-1x1 gray">10</div> */}
          {/* <div class="block frame-1x1 violet">11</div>
        <div class="block frame-1x1 gray">12</div>
        <div class="block frame-2x1 tomato">13</div>
        <div class="block frame-1x1 gray">14</div> */}
          {/* <Row>
          <Col md="4"> */}
          {/* <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/damir-bosnjak.jpg")} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h5 className="title">Chet Faker</h5>
                  </a>
                  <p className="description">@chetfaker</p>
                </div>
                <p className="description text-center">
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        12 <br />
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        2GB <br />
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="3">
                      <h5>
                        24,6$ <br />
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card> */}
          {/* <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Members</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        DJ Khaled <br />
                        <span className="text-muted">
                          <small>Offline</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/joe-gardner-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        Amit Badala <br />
                        <span className="text-success">
                          <small>Available</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col className="col-ms-7" xs="7">
                        Flume <br />
                        <span className="text-danger">
                          <small>Busy</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card> */}
          {/* </Col> */}
          {/* <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Company (disabled)</label>
                        <Input
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="Chet"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          defaultValue="Melbourne, Australia"
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Melbourne"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          defaultValue="Australia"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          type="textarea"
                          defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col> */}
          {/* </Row> */}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
