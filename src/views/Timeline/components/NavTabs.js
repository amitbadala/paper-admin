import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Icon } from "@iconify/react";
import TabContent from "./TabContent";
import React, { useState } from "react";

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

const NavTabs = React.memo(({ company }) => {
  const [activeTab, setActiveTab] = useState("fe");

  return (
    <>
      <Nav tabs fill>
        <NavItem>
          <NavLink
            className={`${activeTab === "fe" ? "active" : ""}`}
            onClick={() => setActiveTab("fe")}
          >
            FrontEnd
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${activeTab === "be" ? "active" : ""}`}
            onClick={() => setActiveTab("be")}
          >
            BackEnd & DevOps
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${activeTab === "oth" ? "active" : ""}`}
            onClick={() => setActiveTab("oth")}
          >
            Others
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent company={company} activeTab={activeTab} />
    </>
  );
});

export default NavTabs;
