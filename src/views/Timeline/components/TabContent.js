import {
  Row,
  Col,
  Nav,
  NavItem,
  Table,
  TabContent as ReactTab,
} from "reactstrap";
import { Icon } from "@iconify/react";

const skillsSet = [
  {
    type: "Frontend",
    tabName: "fe",
    technologies: [
      { name: "React", icon: "logos:react", showName: true },
      { name: "Javascript", icon: "logos-javascript", showName: true },
      { name: "Angular", icon: "logos:angular-icon", showName: true },
      { name: "jQuery", icon: "devicon:jquery", showName: true },
      { name: "webpack", icon: "logos:webpack", showName: true },
      { name: "Babel", icon: "logos-babel", showName: false },
      { name: "Jest", icon: "logos-jest", showName: true },
      { name: "Ant", icon: "logos:ant-design", showName: true },
      { name: "Ionic", icon: "logos:ionic-icon", showName: true },
      { name: "Material UI", icon: "devicon:materialui", showName: true },
      { name: "Html", icon: "logos-html-5", showName: true },
      { name: "Css", icon: "logos-css-3", showName: true },
      { name: "Less", icon: "logos-less", showName: false },
      { name: "Scss", icon: "vscode-icons:file-type-scss2", showName: true },
    ],
  },
  {
    type: "Backend",
    tabName: "be",
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
    tabName: "be",
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
    tabName: "oth",
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

const TabContent = ({ company, activeTab }) => {
  const rows = [];
  for (let i = 0; i < skillsSet[0].technologies.length; i += 4) {
    rows.push(skillsSet[0].technologies.slice(i, i + 4));
  }
  console.log(rows);

  return (
    <ReactTab activeTab={activeTab} className="tab-container">
      {/* {company}
      {activeTab} */}
      <Table>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map(({ name, icon, showName, iconColor }) => (
                <td key={name}>
                  <div className="tech-logo">
                    <Icon
                      color={iconColor}
                      icon={icon}
                      style={{
                        marginRight: "6px",
                        fontSize: "x-large",
                      }}
                    />
                    {showName ? <span className="iconify">{name}</span> : null}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </ReactTab>
  );
};

export default TabContent;
