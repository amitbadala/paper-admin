import React from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import ScrollLink from "components/ScrollLink/ScrollLink";
import Logo from "components/Logo/Logo";
import "./sidebar.scss";
import Button from "components/Button/Button";
import { Icon } from "@iconify/react";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <Logo />
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <ScrollLink href={prop.path} className="nav-NavLink">
                  <span className="emoji-icon">{prop.emoji}</span>
                  {prop.name}
                </ScrollLink>
              </li>
            );
          })}
        </Nav>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            margin: "20px 0px",
          }}
        >
          <a
            href="https://docs.google.com/document/d/1nQJ4FHG--I74aANytChTIg9dbpr_ftPwI0HemP-sFIM/edit?usp=sharing"
            target="_blank"
            className="btn small"
          >
            <Icon
              icon="basil:document-solid"
              color="springgreen"
              fontSize={20}
            />{" "}
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
