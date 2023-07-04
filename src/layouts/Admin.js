import React, { useEffect, useState } from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import About from "views/About.js";
import User from "views/User";
import "./_admin.scss";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import WorkExperience from "views/WorkExperience/WorkExperience";
import Blog from "views/Blog/Blog";
import Highlights from "views/Highlights/Highlights";

var ps;

function Dashboard(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanelRef = React.useRef();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      // console.log(mainPanelRef.current.scrollTop);
      const scrollPosition =
        mainPanelRef.current.scrollTop + mainPanelRef.current.clientHeight / 2; // Midpoint of viewport
      console.log("scrollPosition-", scrollPosition);
      // Loop through each section and check if it's in the viewport
      document.querySelectorAll(".section").forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
          // Section is in viewport
          setActiveSection(section.id);
        }
      });
    };

    const mainPanel = mainPanelRef.current;

    if (mainPanel) {
      mainPanel.addEventListener("scroll", handleScroll);
    }

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      if (mainPanel) {
        mainPanel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight / 2; // Midpoint of viewport
  //     debugger;
  //     // Loop through each section and check if it's in the viewport
  //     document.querySelectorAll(".section").forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionBottom = sectionTop + section.offsetHeight;

  //       if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
  //         // Section is in viewport
  //         setActiveSection(section.id);
  //       }
  //     });
  //   };

  //   // Attach the event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on unmount
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanelRef.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanelRef.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div className="wrapper">
      <Sidebar
        style={{ background: "#f4f3ef" }}
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" id="main-panel" ref={mainPanelRef}>
        <DemoNavbar {...props} activeSection={activeSection} />
        <About id="about" />
        <div className="nav-header">
          experience<span className="period"></span>
        </div>
        <WorkExperience id="user" />
        <div className="nav-header">
          blog<span className="period"></span>
        </div>
        <Blog />
        <div className="nav-header">
          contact<span className="period"></span>
        </div>
        <Highlights id="highlights" />
        {/* <div className="section"><h2 className="big-heading">Amit Badala <span role="img" aria-label="hi">👋</span></h2></div> */}
        {/* {routes.map((prop, key) => {
            return (
              <li
                path={prop.path}
                element={prop.component}
                key={key}
                exact
              />
            );
          })} */}
        <Footer fluid />
      </div>
      {/* <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      /> */}
    </div>
  );
}

export default Dashboard;
