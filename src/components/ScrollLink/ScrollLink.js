import React from "react";

const ScrollLink = (props) => {
  const handleScroll = (e) => {
    debugger;
    e.preventDefault();
    // remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    const panel = document.getElementById("main-panel");
    let scrollTo = 0;
    if (elem && panel) {
      scrollTo = elem.offsetTop - 80;
      panel.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <a {...props} onClick={handleScroll}>
      {props.children}
    </a>
  );
};

export default ScrollLink;
