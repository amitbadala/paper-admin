import React, { useEffect, useLayoutEffect, useState } from "react";
import "./timeline.scss";

const Timeline = (props) => {
  const {
    orientation = "horizontal",
    containerDiv = "#timeline",
    datesDiv = "#dates",
    datesSelectedClass = "selected",
    datesSpeed = "normal",
    issuesDiv = "#issues",
    issuesSelectedClass = "selected",
    issuesSpeed = "fast",
    issuesTransparency = 0.2,
    issuesTransparencySpeed = 500,
    prevButton = "#prev",
    nextButton = "#next",
    arrowKeys = false,
    startAt = 1,
    autoPlay = false,
    autoPlayDirection = "forward",
    autoPlayPause = 2000,
    dates = [],
    issues = [],
  } = props;

  const [currentIndex, setCurrentIndex] = useState(startAt - 1);
  const [currentIssue, setCurrentIssue] = useState(issues[startAt - 1]);
  const [variables, setVariables] = useState({
    heightContainer: 0,
    heightIssue: 0,
    heightDate: 0,
  });

  useEffect(() => {
    // SET POSITIONS
    let howManyIssues = issues.length;
    var containerElement = document.querySelector(containerDiv);
    var heightContainer = containerElement.clientHeight;

    // get the height of the content selected
    let tempIssue = document.querySelector(issuesDiv);
    var issuesContainer = document.querySelectorAll(issuesDiv + " li");
    var heightIssue = issuesContainer[0].clientHeight;
    // Set the height of the issues container
    // var issuesContainer = document.querySelector(issuesDiv);
    if (tempIssue.style) {
      tempIssue.style.height = heightIssue * howManyIssues + "px";
    } else {
      tempIssue.setAttribute(
        "style",
        "height:" + heightIssue * howManyIssues + "px;"
      );
    }
    // issuesContainer.style.height = heightIssue * issues.length + "px";
    let tempDatesDiv = document.querySelector(datesDiv);
    var datesContainer = document.querySelectorAll(datesDiv + " li");
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
    setVariables((prev) => {
      return { ...prev, heightDate: heightDate, heightIssue: heightIssue };
    });
  }, []);

  useEffect(() => {
    setCurrentIssue(issues[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (arrowKeys) {
        if (orientation === "horizontal") {
          if (event.keyCode === 39) {
            handleNext();
          }
          if (event.keyCode === 37) {
            handlePrev();
          }
        } else if (orientation === "vertical") {
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
  }, [arrowKeys, orientation]);

  const animateMarginTop = (element, targetMargin, duration) => {
    debugger;
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

  const handleDateClick = (index) => {
    setCurrentIndex(index);
  };

  function handleNext(event) {
    const { heightIssue, heightDate } = variables;

    event.preventDefault();

    var issuesContainer = document.querySelector(issuesDiv);
    var currentIndex = Array.from(
      issuesContainer.querySelectorAll("li." + issuesSelectedClass)
    ).indexOf(event.currentTarget.parentElement);
    var currentPositionIssues = parseInt(
      getComputedStyle(issuesContainer).marginTop
    );
    var currentIssueIndex = currentPositionIssues / heightIssue;

    var datesContainer = document.querySelector(datesDiv);
    var currentPositionDates = parseInt(
      getComputedStyle(datesContainer).marginTop
    );
    var currentIssueDate = currentPositionDates - heightDate;

    if (currentPositionIssues <= -(heightIssue * issues.length - heightIssue)) {
      issuesContainer.style.marginTop =
        -(heightIssue * issues.length - heightIssue) + "px";
      document.querySelector(datesDiv + " li:last-child a").click();
    } else {
      if (!issuesContainer.is(":animated")) {
        document
          .querySelectorAll(datesDiv + " li")
          [currentIndex + 1].querySelector("a")
          .click();
      }
    }
  }

  //   const handleNext = () => {
  //     // debugger;
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
    <div className="timeline" id="timeline" style={{ position: "relative" }}>
      <ul id="dates">
        {dates.map((date, index) => (
          <li key={index}>
            <span
              className={currentIndex === index ? "selected" : ""}
              onClick={() => handleDateClick(index)}
            >
              {date}
            </span>
          </li>
        ))}
      </ul>
      <ul id="issues">
        {issues.map((issue) => (
          <li id={issue?.year}>
            <img src={issue?.imgUrl} alt="" />
            <h1>{issue?.year}</h1>
            <p>{issue?.paragraph}</p>
          </li>
        ))}
      </ul>
      {/* <div id="grad_top"></div>
      <div id="grad_bottom"></div> */}
      <div href="#" onClick={handleNext} id="next">
        +
      </div>
      <div href="#" onClick={handlePrev} id="prev">
        -
      </div>
    </div>
  );
};

export default Timeline;
