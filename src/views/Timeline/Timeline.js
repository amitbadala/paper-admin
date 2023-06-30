import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./timeline.scss";

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
  const [currentIssue, setCurrentIssue] = useState(
    issues[settings.startAt - 1]
  );
  const defaultDateDivHeightRef = useRef(null);

  const [variables, setVariables] = useState({
    heightContainer: 0,
    heightIssue: 0,
    heightDate: 0,
  });

  useEffect(() => {
    // SET POSITIONS
    let howManyIssues = issues.length;
    var containerElement = document.querySelector(settings.containerDiv);
    var heightContainer = containerElement.clientHeight;

    // get the height of the content selected
    let tempIssue = document.querySelector(settings.issuesDiv);
    var issuesContainer = document.querySelectorAll(settings.issuesDiv + " li");
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
    setVariables((prev) => {
      return { ...prev, heightDate: heightDate, heightIssue: heightIssue };
    });
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

  const moveDates = () => {
    debugger;
    var datesList = document.querySelectorAll(settings.datesDiv + " li");
    var heightDate = datesList[0].offsetHeight;
    var datesLinks = document.querySelectorAll(
      `${settings.datesDiv} > li > span`
    );
    // var currentIndex = Array.from(datesLinks).indexOf(this.parentElement);
    console.log(defaultDateDivHeightRef);
    if (!defaultDateDivHeightRef.current) {
      let defaultPositionDates = parseInt(
        getComputedStyle(document.querySelector(settings.datesDiv)).marginTop
      );
      defaultDateDivHeightRef.current = defaultPositionDates;
    }

    datesLinks.forEach(function (link, index) {
      if (index === currentIndex) {
        link.classList.add(settings.datesSelectedClass);
      } else {
        link.classList.remove(settings.datesSelectedClass);
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
    debugger;

    let issuesContainer = document.querySelectorAll(settings.issuesDiv + " li");
    let heightIssue = issuesContainer[0].clientHeight;

    var issuesDiv = document.querySelector(settings.issuesDiv);
    var animationDuration = parseInt(settings.issuesSpeed);

    issuesDiv.style.transitionDuration = animationDuration + "ms";
    issuesDiv.style.marginTop = -heightIssue * currentIndex + "px";

    let issuesList = document.querySelectorAll(settings.issuesDiv + " li");
    // var animationDuration = parseInt(settings.issuesSpeed);
    var transparencyDuration = parseInt(settings.issuesTransparencySpeed);
    var transparencyValue = parseFloat(settings.issuesTransparency);

    issuesList.forEach(function (item, index) {
      item.style.transitionDuration = animationDuration + "ms";
      if (index === currentIndex) {
        item.style.opacity = 1;
        item.classList.add(settings.issuesSelectedClass);
      } else {
        item.style.opacity = transparencyValue;
        item.classList.remove(settings.issuesSelectedClass);
      }
    });

    // issuesList[currentIndex].classList.add(settings.issuesSelectedClass);
    setTimeout(function () {
      issuesList[currentIndex].style.transitionDuration =
        transparencyDuration + "ms";
      issuesList[currentIndex].style.opacity = "1";
    }, 0);

    // setCurrentIndex(index);
    moveDates();
  };

  function handleNext(event) {}

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
            <span onClick={() => setCurrentIndex(index)}>{date}</span>
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
      <div id="grad_top"></div>
      <div id="grad_bottom"></div>
      <div
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
      </div>
    </div>
  );
};

export default Timeline;
