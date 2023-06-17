import React from "react";

const ScrollLink = (props) => {
  const handleScroll = (e) => {
    e.preventDefault();
    // remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    console.log(targetId)
    let scrollTo = 0;
    if (elem) {
      scrollTo = elem.offsetTop - 80;
      window.scrollTo({
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
