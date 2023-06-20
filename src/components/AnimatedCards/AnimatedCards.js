import { useEffect } from "react";
import "./animated-cards.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { Line, Pie } from "react-chartjs-2";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

// const animateOnScroll = (ele) => {
//   debugger;
//   const container = ele;
//   const cards = container.querySelectorAll(".card-stats");

//   for (let i = 0; i < cards.length; i++) {
//     const card = cards[i];
//     const cardPosition =
//       card.getBoundingClientRect().top - container.getBoundingClientRect().top;
//     console.log(cardPosition, "cardPosition");
//     // Check if this card is the second one in view
//     if (cardPosition > 110 && cardPosition < 120) {
//       card.style.transform = "scale(1.2)";
//     } else {
//       card.style.transform = "scale(0.8)";
//     }
//   }
// };

const AnimatedCards = () => {
  //   useEffect(() => {
  //     let ele = document.getElementById("carousel");
  //     // console.log(ele, "ele");
  //     document
  //       .getElementById("carousel")
  //       ?.addEventListener("scroll", () => animateOnScroll(ele));
  //     // Specify how to clean up after this effect
  //     return () => {
  //       document.removeEventListener("scroll", animateOnScroll);
  //     };
  //   }, []);

  const we = [
    {
      company: "Could be You",
      duration: "TODAY - ♾️",
      position: "Hire Me",
      logo: "https://assets.website-files.com/6411e025888db9522f309cf1/64132b5769cd3d5d874ac1fd_logo-symbol.svg",
    },
    {
      company: "Human Capital",
      duration: "APR 2020 - APR 2023  (3.1 yrs)",
      position: "Remote Software Engineer",
      logo: "https://assets.website-files.com/6411e025888db9522f309cf1/64132b5769cd3d5d874ac1fd_logo-symbol.svg",
    },
    {
      company: "Khonvo",
      duration: "AUG 2019 - APR 2020  (9 mos)",
      position: "Remote Software Engineer",
      logo: "https://assets.website-files.com/6411e025888db9522f309cf1/64132b5769cd3d5d874ac1fd_logo-symbol.svg",
    },
    {
      company: "OneInsure",
      duration: "DEC 2017 - APR 2019  (1.5 yrs)",
      position: "Remote Software Engineer",
      logo: "https://assets.website-files.com/6411e025888db9522f309cf1/64132b5769cd3d5d874ac1fd_logo-symbol.svg",
    },
    {
      company: "Webesky",
      duration: "FEB 2016 - NOV 2017 (1.9 yrs)",
      position: "Co-Founder",
      logo: "https://assets.website-files.com/6411e025888db9522f309cf1/64132b5769cd3d5d874ac1fd_logo-symbol.svg",
    },
    {
      company: "Bristlecone",
      duration: "APR 2015 - JAN 2016 (10 mos)",
      position: "Remote Software Engineer",
      logo: "https://assets.website-files.com/6411e025888db9522f309cf1/64132b5769cd3d5d874ac1fd_logo-symbol.svg",
    },
  ];
  return (
    <Row>
      <Col md="3" style={{ paddingRight: 0 }}>
        <div class="carousel-wrapper" id="carousel">
          <div class="carousel">
            {we.map((exp) => (
              <Card className="card-stats">
                <div className="custom-header">
                  <p className="card-category">{exp.position}</p>
                </div>
                <CardBody>
                  <Row>
                    {/* <Col md="4" xs="5"> 
                </Col> */}
                    <Col md="12" xs="12">
                      <CardTitle className="flex align-items">
                        {/* <img alt="company-logo" src={exp.logo} /> */}
                        <h5 style={{ fontSize: 22, fontWeight: 600 }}>
                          {exp.company}
                        </h5>
                      </CardTitle>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    📅 {`  `}
                    {exp.duration}
                  </div>
                </CardFooter>
              </Card>
              //   <div class="carousel__item">
              //     <div class="carousel__item-head">
              //       <img src={exp.logo} alt="company-logo" />
              //     </div>
              //     <div class="carousel__item-body">
              //       <p class="title">{exp.company}</p>
              //       <p>{exp.position}</p>
              //     </div>
              //   </div>
            ))}
          </div>
        </div>
      </Col>
      <Col md="9">
        <Card>
          <CardHeader>
            <CardTitle tag="h5">Users Behavior</CardTitle>
            <p className="card-category">24 Hours performance</p>
          </CardHeader>
          <CardBody>
            <Line
              data={dashboard24HoursPerformanceChart.data}
              options={dashboard24HoursPerformanceChart.options}
              width={400}
              height={100}
            />
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="fa fa-history" /> Updated 3 minutes ago
            </div>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default AnimatedCards;
