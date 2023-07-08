import {
  Row,
  Col,
  Nav,
  NavItem,
  Table,
  TabContent as ReactTab,
} from "reactstrap";
import { Icon } from "@iconify/react";

const companyWiseSkill = {
  "human capital": [
    "React",
    "webpack",
    "Babel",
    "Jest",
    "Ant",
    "Less",
    "Html",
    "Css",
    "Javascript",
    "NodeJS",
    "Python",
    "pytest",
    "FastAPI",
    "Postgres",
    "Redis",
    "SQLAlchemy",
    "Github",
    "Docker",
    "Netlify",
    "Heroku",
    "AWS",
    "Docker",
    "Zapier",
    "Webflow",
    "Sanity CMS",
    "Analytics",
    "Airtable",
  ],
  khonvo: [
    "React",
    "webpack",
    "Babel",
    "Ant",
    "Scss",
    "Html",
    "Css",
    "Javascript",
    "Ruby on Rails",
    "Postgres",
    "Github",
    "Netlify",
    "Heroku",
    "Photoshop",
  ],
  oneinsure: [
    "Angular",
    "jQuery",
    "Ionic",
    "Html",
    "Css",
    "Javascript",
    ".NET",
    "Ms SQL",
  ],
  webesky: [
    "jQuery",
    "Html",
    "Css",
    "Javascript",
    ".NET",
    "Ms SQL",
    "WordPress",
    "Photoshop",
  ],
  bristlecone: ["jQuery", "Html", "Css", "Javascript", ".NET", "Ms SQL"],
};

const skillsSet = [
  {
    type: "Frontend",
    tabName: "fe",
    technologies: [
      { name: "React", icon: "logos:react", showName: true },
      { name: "Next Js", icon: "file-icons:nextjs", showName: true },
      { name: "Angular", icon: "logos:angular-icon", showName: true },
      { name: "jQuery", icon: "devicon:jquery", showName: true },
      { name: "webpack", icon: "logos:webpack", showName: true },
      { name: "Babel", icon: "logos-babel", showName: false },
      { name: "Jest", icon: "logos-jest", showName: true },
      { name: "Ant", icon: "logos:ant-design", showName: true },
      { name: "Ionic", icon: "logos:ionic-icon", showName: true },
      { name: "Material UI", icon: "devicon:materialui", showName: true },
      { name: "Less", icon: "logos-less", showName: false },
      { name: "Scss", icon: "vscode-icons:file-type-scss2", showName: true },
      { name: "Tailwind", icon: "logos:tailwindcss-icon", showName: true },
      { name: "Html", icon: "logos-html-5", showName: true },
      { name: "Css", icon: "logos-css-3", showName: true },
      { name: "Javascript", icon: "logos-javascript", showName: true },
    ],
  },
  {
    type: "Backend",
    tabName: "be",
    technologies: [
      { name: "NodeJS", icon: "logos-nodejs-icon", showName: true },
      { name: "Python", icon: "logos-python", showName: true },
      { name: "pytest", icon: "devicon:pytest", showName: true },
      { name: ".NET", icon: "logos:c-sharp", showName: true },
      { name: "Ruby on Rails", showName: true },
      { name: "FastAPI", icon: "devicon:fastapi", showName: true },
      { name: "Postgres", icon: "logos-postgresql", showName: true },
      { name: "Ms SQL", icon: "devicon:sqldeveloper", showName: true },
      { name: "mongo DB", icon: "devicon:mongodb", showName: true },
      { name: "Redis", icon: "logos-redis", showName: true },
      { name: "SQLAlchemy", icon: "logos-alembic", showName: true },
      {
        name: "Github",
        icon: "icon-park:github",
        showName: true,
        iconColor: "white",
      },
      { name: "Docker", icon: "logos-docker-icon", showName: true },
      { name: "Netlify", icon: "skill-icons:netlify-light", showName: true },
      { name: "Heroku", icon: "logos-heroku-icon", showName: true },
      { name: "AWS", icon: "logos:aws", showName: false },
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
        icon: "logos:zapier",
        showName: false,
        iconColor: "white",
      },
      { name: "Webflow", icon: "logos-webflow", showName: false },
      { name: "Sanity CMS", icon: "logos-sanity", showName: false },
      { name: "Analytics", icon: "logos:zoho", showName: true },
      { name: "Airtable", icon: "logos:airtable", showName: true },
      { name: "WordPress", icon: "skill-icons:wordpress", showName: true },
      {
        name: "Photoshop",
        icon: "vscode-icons:file-type-photoshop",
        showName: true,
      },
    ],
  },
];

const TabContent = ({ activeTab, company }) => {
  //   console.log(activeTab, company);
  const rows = [];
  let skillType = skillsSet.find((el) => el.tabName === activeTab);
  if (!skillType) return null;
  for (let i = 0; i < skillType.technologies.length; i += 4) {
    rows.push(skillType.technologies.slice(i, i + 4));
  }

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
                  <div
                    className="tech-logo"
                    style={{
                      filter: companyWiseSkill[company.toLowerCase()]?.includes(
                        name
                      )
                        ? "unset"
                        : null,
                      opacity: companyWiseSkill[
                        company.toLowerCase()
                      ]?.includes(name)
                        ? 1
                        : 0.5,
                    }}
                  >
                    {icon ? (
                      <Icon
                        color={iconColor}
                        icon={icon}
                        style={{
                          marginRight: "6px",
                          fontSize: "x-large",
                        }}
                      />
                    ) : null}
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
