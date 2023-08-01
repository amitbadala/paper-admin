import React, { useEffect, useRef, useState } from "react";
// import Chart from "daily-activity-graph";
import { Col, Row } from "reactstrap";
import { Icon } from "@iconify/react";
// import RocketAnimation from "components/RocketAnimation/RocketAnimation";

function ActivityChart({ data }) {
  const chartRef = useRef();

  return <div />;
}

const About = () => {
  const data = Array.from({ length: 365 }).map((_, i) => {
    return {
      date: new Date(2023, 0, i + 1), // Generate dates for every day of the year
      count: Math.floor(Math.random() * 60), // Random count for each day
    };
  });

  const [chartData, setChartData] = useState(data);

  // useEffect(() => {
  //   const chart = new Chart("#chart", chartData);
  //   chart.initialize();
  //   chart.render();
  // }, [chartData]);

  return (
    <section id="about" className="section">
      <img
        alt="..."
        className="amit"
        src={require("assets/img/amitbadala.png")}
      />
      {/* <ActivityChart data={data} /> */}
      <div id="chart"></div>
      <div className="container">
        {/* <RocketAnimation /> */}
        <div className="about-content">
          <p className="typing-text">Hi, my name is</p>
          <h1 className="big-header dark-slate">
            Amit Badala <span className="waving-hand">👋🏼</span>
          </h1>
          <h1 className="sub-big-header">
            I am a <span className="underline-magical">Software Engineer</span>{" "}
            <br /> with 7+ yrs of exp.
          </h1>
          <p style={{ fontSize: 20 }}>
            I like to craft solid and scalable frontend products with great user
            experiences.
            {/* <span className="underline-magical">design and development</span>. */}
          </p>
          <Row>
            <Col sm="12" md="3">
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              ></div> */}
              {/* <Icon
                icon="file-icons:ionic-project"
                color="#333"
                fontSize={32}
                style={{ marginRight: 5 }}
              /> */}
              <p style={{ fontSize: 16, color: "white" }}>
                Highly skilled at progressive enhancement, design systems & UI
                Engineering.
              </p>
            </Col>
            <Col sm="12" md={{ size: 3, offset: 1 }}>
              <p style={{ fontSize: 16, color: "white" }}>
                Proven experience building full-stack products across several
                industries.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default About;

// Since 2005, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.
