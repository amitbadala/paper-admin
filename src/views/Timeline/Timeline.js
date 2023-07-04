import React, { useEffect, useMemo, useRef, useState } from "react";
import { Row, Col, Table } from "reactstrap";
import "./timeline.scss";
import Bristlecone from "assets/img/logos/bristlecone_logo.png";
import Khonvo from "assets/img/logos/khonvo_logo.png";
import Oneinsure from "assets/img/logos/oneinsure_logo.png";
import HC from "assets/img/logos/hc_logo.svg";
import SkillsMarquee from "components/AnimatedCards/SkillsMarquee";
import { Icon } from "@iconify/react";

const skillsSet = [
  {
    type: "Frontend",
    technologies: [
      { name: "React", icon: "logos:react", showName: true },
      { name: "Javascript", icon: "logos-javascript", showName: true },
      { name: "Html", icon: "logos-html-5", showName: true },
      { name: "Css", icon: "logos-css-3", showName: true },
      { name: "Less", icon: "logos-less", showName: false },
      { name: "Scss", icon: "vscode-icons:file-type-scss2", showName: true },
      { name: "Web pack", icon: "logos:webpack", showName: true },
      { name: "Jest", icon: "logos-jest", showName: true },
      { name: "Babel", icon: "logos-babel", showName: false },
      { name: "Ant", icon: "logos:ant-design", showName: true },
    ],
  },
  {
    type: "Backend",
    technologies: [
      { name: "Python", icon: "logos-python", showName: true },
      { name: "FastAPI", icon: "devicon:fastapi", showName: true },
      { name: "Redis", icon: "logos-redis", showName: true },
      { name: "Postgres", icon: "logos-postgresql", showName: true },
      { name: "SQLAlchemy", icon: "logos-alembic", showName: true },
      { name: "NodeJS", icon: "logos-nodejs-icon", showName: true },
    ],
  },
  {
    type: "Devops",
    technologies: [
      {
        name: "Github",
        icon: "bi:github",
        showName: true,
        iconColor: "white",
      },
      { name: "Docker", icon: "logos-docker-icon", showName: true },
      { name: "Netlify", icon: "skill-icons:netlify-light", showName: true },
      { name: "Heroku", icon: "logos-heroku-icon", showName: true },
      { name: "AWS", icon: "logos-amazon-aws", showName: true },
    ],
  },
  {
    type: "Others",
    technologies: [
      {
        name: "Zapier",
        icon: "simple-icons:zapier",
        showName: true,
        iconColor: "white",
      },
      { name: "Webflow", icon: "logos-webflow", showName: false },
      { name: "Sanity CMS", icon: "logos-sanity", showName: false },
      { name: "Sigma", icon: "logos-figma-icon", showName: false },
    ],
  },
];

const we = [
  // {
  //   company: "Could be You",
  //   duration: "TODAY - ♾️",
  //   position: "Hire Me",
  //   logo: "https://assets.website-files.com/6411e025888db9522f309cf1/64132b5769cd3d5d874ac1fd_logo-symbol.svg",

  // },
  {
    company: "Human Capital",
    duration: "APR 2020 - APR 2023  (3.1 yrs)",
    position: "Remote Software Engineer",
    logo: HC,
    description: `A venture firm with over $1.6B in capital commitment. 
    Its portfolio includes > 130 companies, including around 15 that became unicorns, such as Brex, Commure, and Snowflake`,
  },
  {
    company: "Khonvo",
    duration: "AUG 2019 - APR 2020  (9 mos)",
    position: "Remote Software Engineer",
    logo: Khonvo,
    logoHeight: 40,
    description: `A startup, co-founded by alumni from (Harvard & MIT) and a former Googler, aimed to simplify email campaigns by building a chrome-extension. The company joined forces with Human Capital in 2020`,
  },
  {
    company: "OneInsure",
    duration: "DEC 2017 - APR 2019  (1.5 yrs)",
    position: "Software Development Manager",
    logo: Oneinsure,
    logoHeight: 45,
    description: `India’s 3rd largest Insurance-commerce `,
  },
  {
    company: "Webesky",
    duration: "FEB 2016 - NOV 2017 (1.9 yrs)",
    position: "Co-Founder",
    logoHeight: 80,
    description: `A digital agency that helps businesses establish their online presence`,
  },
  {
    company: "Bristlecone",
    duration: "APR 2015 - JAN 2016 (10 mos)",
    position: "Associate Consultant",
    logo: Bristlecone,
    hideName: true,
    description: `It is the leading provider of connected logistics solutions, including AI applications, SAP integration, and more.`,
  },
];

const Timeline = (props) => {
  const {
    // orientation = "horizontal",
    // containerDiv = "#timeline",
    // datesDiv = "#dates",
    // datesSelectedClass = "selected",
    // datesSpeed = "normal",
    // issuesDiv = "#issues",
    // issuesSelectedClass = "selected",
    // issuesSpeed = "fast",
    // issuesTransparency = 0.2,
    // issuesTransparencySpeed = 500,
    // prevButton = "#prev",
    // nextButton = "#next",
    // arrowKeys = false,
    // startAt = 1,
    // autoPlay = false,
    // autoPlayDirection = "forward",
    // autoPlayPause = 2000,
    dates = [],
    issues = [],
  } = props;

  let settings = useMemo(() => {
    return {
      orientation: "vertical",
      containerDiv: "#timeline",
      datesDiv: "#dates",
      datesSelectedClass: "selected",
      datesSpeed: 800,
      issuesDiv: "#issues",
      issuesSelectedClass: "selected",
      issuesSpeed: 500,
      issuesTransparency: 0.2,
      issuesTransparencySpeed: 500,
      prevButton: "#prev",
      nextButton: "#next",
      arrowKeys: "false",
      startAt: 1,
      autoPlay: "false",
      autoPlayDirection: "forward",
      autoPlayPause: 2000,
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(settings.startAt - 1);
  const defaultDateDivHeightRef = useRef(null);
  const companyInfoRef = useRef(null);

  useEffect(() => {
    // SET POSITIONS
    // let howManyIssues = issues.length;
    var containerElement = document.querySelector(settings.containerDiv);
    var heightContainer = containerElement.clientHeight;

    // // get the height of the content selected
    // let tempIssue = document.querySelector(settings.issuesDiv);
    // var issuesContainer = document.querySelectorAll(settings.issuesDiv + " li");
    // var heightIssue = issuesContainer[0].clientHeight;
    // // Set the height of the issues container
    // // var issuesContainer = document.querySelector(issuesDiv);
    // if (tempIssue.style) {
    //   tempIssue.style.height = heightIssue * howManyIssues + "px";
    // } else {
    //   tempIssue.setAttribute(
    //     "style",
    //     "height:" + heightIssue * howManyIssues + "px;"
    //   );
    // }
    // issuesContainer.style.height = heightIssue * issues.length + "px";
    let tempDatesDiv = document.querySelector(settings.datesDiv);
    var datesContainer = document.querySelectorAll(settings.datesDiv + " li");
    var heightDate = datesContainer[0].clientHeight;
    // Set the height and margin of the dates container
    // var datesContainer = document.querySelector(datesDiv);
    if (tempDatesDiv.style) {
      tempDatesDiv.style.height = heightDate * dates.length + "px";
      tempDatesDiv.style.marginTop =
        heightContainer / 2 - heightDate / 2 + "px";
    } else {
      tempDatesDiv.setAttribute(
        "style",
        "height:" + heightDate * dates.length + "px"
      );
      tempDatesDiv.style.marginTop =
        heightContainer / 2 - heightDate / 2 + "px";
    }
    setInitialPositions();
    // setVariables((prev) => {
    //   return { ...prev, heightDate: heightDate, heightIssue: heightIssue };
    // });
  }, []);

  useEffect(() => {
    handleDateClick();
    // setCurrentIssue(issues[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (settings.arrowKeys) {
        if (settings.orientation === "horizontal") {
          if (event.keyCode === 39) {
            handleNext();
          }
          if (event.keyCode === 37) {
            handlePrev();
          }
        } else if (settings.orientation === "vertical") {
          if (event.keyCode === 40) {
            handleNext();
          }
          if (event.keyCode === 38) {
            handlePrev();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [settings]);

  const setInitialPositions = () => {
    // debugger
    let howManyIssues = we.length;
    let companyInfoChildHeight =
      companyInfoRef.current.firstElementChild.clientHeight;
    companyInfoRef.current.style.height =
      companyInfoChildHeight * howManyIssues + "px";
  };

  const animateMarginTop = (element, targetMargin, duration) => {
    const startTime = performance.now();
    const startMargin = parseInt(getComputedStyle(element).marginTop, 10);

    function animate(time) {
      const progress = (time - startTime) / duration;
      if (progress < 1) {
        element.style.marginTop =
          startMargin + progress * (targetMargin - startMargin) + "px";
        requestAnimationFrame(animate);
      } else {
        element.style.marginTop = targetMargin + "px";
      }
    }

    requestAnimationFrame(animate);
  };

  const moveCompanyInfo = () => {
    // let issuesContainer = document.querySelectorAll(settings.issuesDiv + " li");
    // let heightIssue = issuesContainer[0].clientHeight;

    // var issuesDiv = document.querySelector(settings.issuesDiv);
    var animationDuration = parseInt(settings.issuesSpeed);

    let howManyIssues = we.length;
    let companyInfoChildHeight =
      companyInfoRef.current.firstElementChild.clientHeight;
    companyInfoRef.current.style.height =
      companyInfoChildHeight * howManyIssues + "px";

    companyInfoRef.current.style.transitionDuration = animationDuration + "ms";
    companyInfoRef.current.style.marginTop =
      -companyInfoChildHeight * currentIndex + "px";

    // issuesDiv.style.transitionDuration = animationDuration + "ms";
    // issuesDiv.style.marginTop = -heightIssue * currentIndex + "px";
    const companiesList = companyInfoRef.current.children;

    // let issuesList = document.querySelectorAll(settings.issuesDiv + " li");
    // var animationDuration = parseInt(settings.issuesSpeed);
    var transparencyDuration = parseInt(settings.issuesTransparencySpeed);
    var transparencyValue = parseFloat(settings.issuesTransparency);

    [...companyInfoRef.current.children].forEach(function (item, index) {
      item.style.transitionDuration = animationDuration + "ms";
      if (index === currentIndex) {
        item.style.opacity = 1;
        item.classList.add(settings.issuesSelectedClass);
      } else {
        item.style.opacity = transparencyValue;
        item.classList.remove(settings.issuesSelectedClass);
      }
    });

    setTimeout(function () {
      companiesList[currentIndex].style.transitionDuration =
        transparencyDuration + "ms";
      companiesList[currentIndex].style.opacity = "1";
    }, 0);
  };

  const moveDates = () => {
    var datesList = document.querySelectorAll(settings.datesDiv + " li");
    var heightDate = datesList[0].offsetHeight;
    var datesLinks = document.querySelectorAll(
      `${settings.datesDiv} > li > .we-skeleton`
    );
    // var currentIndex = Array.from(datesLinks).indexOf(this.parentElement);
    // console.log(defaultDateDivHeightRef);
    if (!defaultDateDivHeightRef.current) {
      let defaultPositionDates = parseInt(
        getComputedStyle(document.querySelector(settings.datesDiv)).marginTop
      );
      defaultDateDivHeightRef.current = defaultPositionDates;
    }

    datesLinks.forEach(function (link, index) {
      if (index === currentIndex) {
        link.classList.add(settings.datesSelectedClass);
        link.parentElement.classList.add("active");
      } else {
        link.classList.remove(settings.datesSelectedClass);
        link.parentElement.classList.remove("active");
      }
    });

    document.querySelector(settings.datesDiv).style.transitionDuration =
      settings.datesSpeed + "ms";
    document.querySelector(settings.datesDiv).style.marginTop =
      defaultDateDivHeightRef.current - heightDate * currentIndex + "px";

    //    // issuesContainer.style.height = heightIssue * issues.length + "px";
    // let tempDatesDiv = document.querySelector(settings.datesDiv);
    // var datesContainer = document.querySelectorAll(settings.datesDiv + " li");
    // var heightDate = datesContainer[0].clientHeight;
    // // Set the height and margin of the dates container
    // // var datesContainer = document.querySelector(datesDiv);
    // if (tempDatesDiv.style) {
    //   tempDatesDiv.style.height = heightDate * dates.length + "px";
    //   tempDatesDiv.style.marginTop =
    //     heightContainer / 2 - heightDate / 2 + "px";
    // } else {
    //   tempDatesDiv.setAttribute(
    //     "style",
    //     "height:" + heightDate * dates.length + "px"
    //   );
    //   tempDatesDiv.style.marginTop =
    //     heightContainer / 2 - heightDate / 2 + "px";
    // }
  };

  const handleDateClick = () => {
    // moveCompanyInfo();
    // let issuesContainer = document.querySelectorAll(settings.issuesDiv + " li");
    // let heightIssue = issuesContainer[0].clientHeight;

    // var issuesDiv = document.querySelector(settings.issuesDiv);
    // var animationDuration = parseInt(settings.issuesSpeed);

    // issuesDiv.style.transitionDuration = animationDuration + "ms";
    // issuesDiv.style.marginTop = -heightIssue * currentIndex + "px";

    // let issuesList = document.querySelectorAll(settings.issuesDiv + " li");
    // // var animationDuration = parseInt(settings.issuesSpeed);
    // var transparencyDuration = parseInt(settings.issuesTransparencySpeed);
    // var transparencyValue = parseFloat(settings.issuesTransparency);

    // issuesList.forEach(function (item, index) {
    //   item.style.transitionDuration = animationDuration + "ms";
    //   if (index === currentIndex) {
    //     item.style.opacity = 1;
    //     item.classList.add(settings.issuesSelectedClass);
    //   } else {
    //     item.style.opacity = transparencyValue;
    //     item.classList.remove(settings.issuesSelectedClass);
    //   }
    // });

    // // issuesList[currentIndex].classList.add(settings.issuesSelectedClass);
    // setTimeout(function () {
    //   issuesList[currentIndex].style.transitionDuration =
    //     transparencyDuration + "ms";
    //   issuesList[currentIndex].style.opacity = "1";
    // }, 0);

    // // setCurrentIndex(index);
    moveCompanyInfo();
    moveDates();
  };

  function handleNext(event) {}

  //   const handleNext = () => {
  //     //
  //     // var issuesEle = document.querySelector(issuesDiv);
  //     // var issueHeight = issuesEle.offsetHeight;
  //     // const targetMargin = -issueHeight * currentIndex; // the target margin-left in pixels
  //     // const duration = issuesSpeed; // duration of the animation in milliseconds
  //     // animateMarginTop(issuesEle, targetMargin, duration);

  //     setCurrentIndex((prevIndex) =>
  //       prevIndex < issues.length - 1 ? prevIndex + 1 : prevIndex
  //     );
  //   };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <>
      <div className="timeline" id="timeline" style={{ position: "relative" }}>
        <div id="dates-div">
          <ul id="dates">
            {we.map(({ company, duration, position }, index) => (
              <li key={index}>
                <div
                  className="red-dot"
                  onClick={() => setCurrentIndex(index)}
                ></div>
                <div
                  onClick={() => setCurrentIndex(index)}
                  // className={`card-stats ${
                  //   index === currentIndex ? "active" : ""
                  // }`}
                  className="we-skeleton"
                >
                  <div className="custom-header">
                    <p className="">{position}</p>
                  </div>
                  <div>
                    <Row>
                      {/* <Col md="4" xs="5"> 
                </Col> */}
                      <Col md="12" xs="12">
                        <div className="flex align-items">
                          {/* <img alt="company-logo" src={exp.logo} /> */}
                          <h5>{company}</h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <div className="footer">
                      <p>
                        📅 {`  `}
                        {duration}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <ul id="issues">
        {issues.map((issue) => (
          <li id={issue?.year}>
            <img src={issue?.imgUrl} alt="" />
            <h1>{issue?.year}</h1>
            <p>{issue?.paragraph}</p>
          </li>
        ))}
      </ul> */}
        <div ref={companyInfoRef} id="company-details">
          {we.map(
            (
              {
                company,
                logo,
                logoHeight = 35,
                duration,
                position,
                hideName = false,
                description,
              },
              index
            ) => (
              <div className="info-box" key={index}>
                <div className="company-highlights">
                  <div className="logo">
                    {logo ? (
                      <img src={logo} alt="" height={logoHeight} />
                    ) : null}
                    {!hideName ? <h2>{company}</h2> : null}
                  </div>
                  <h6>{duration}</h6>
                  <h5>{position}</h5>
                </div>
                <div className="description">
                  <p>{description}</p>
                </div>
                {/* <SkillsMarquee /> */}
                <div class="skills-container">
                  {skillsSet.map(({ type, technologies }, index) => (
                    <>
                      <div class="column">
                        {technologies.map(
                          ({ name, icon, showName, iconColor }) => (
                            <div class="box">
                              <Icon
                                color={iconColor}
                                icon={icon}
                                style={{
                                  marginRight: "5px",
                                  marginLeft: "25px",
                                }}
                              />
                              {showName ? (
                                <span className="iconify">{name}</span>
                              ) : null}
                            </div>
                          )
                        )}
                      </div>
                    </>
                  ))}
                  {/* <div class="column">
                    <div class="box">1</div>
                    <div class="box">2</div>
                  </div>
                  <div class="column">
                    <div class="box">1</div>
                    <div class="box">2</div>
                    <div class="box">3</div>
                  </div>
                  <div class="column">
                    <div class="box">1</div>
                    <div class="box">2</div>
                    <div class="box">3</div>
                    <div class="box">4</div>
                  </div> */}
                </div>
              </div>
            )
          )}
        </div>
        <div id="grad_top"></div>
        <div id="grad_bottom"></div>
        {/* <div
        onClick={() => setCurrentIndex((currIndex) => currIndex + 1)}
        id="next"
      >
        +
      </div>

      <div
        onClick={() => setCurrentIndex((currIndex) => currIndex - 1)}
        id="prev"
      >
        -
      </div> */}
        <div
          id="circle_div"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "red",
            display: "none",
          }}
        ></div>
      </div>
    </>
  );
};

export default Timeline;
