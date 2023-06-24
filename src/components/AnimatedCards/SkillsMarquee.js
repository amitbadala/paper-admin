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
      { name: "Ant Design", icon: "logos:ant-design", showName: true },
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

const SkillsMarquee = () => {
  return (
    <div className="marquee-content">
      {skillsSet.map(({ type, technologies }, index) => (
        <>
          <Icon
            icon="codicon:circle-filled"
            color="white"
            style={{ marginLeft: 20 }}
          />
          <span>{type}</span>
          <Icon icon="material-symbols:double-arrow" color="white" />
          {technologies.map(({ name, icon, showName, iconColor }) => (
            <>
              <Icon
                color={iconColor}
                icon={icon}
                style={{ marginRight: "5px", marginLeft: "25px" }}
              />
              {showName ? <span className="iconify">{name}</span> : null}
            </>
          ))}
        </>
      ))}
    </div>
  );
  //   const container = document.createElement("div");
  //   const test = skillsSet.reduce((accumulator, currentType) => {
  //     // Create a heading for the type
  //     // const heading = document.createElement("h2");
  //     // heading.textContent = currentType.type;
  //     // accumulator.appendChild(heading);
  //     accumulator = accumulator + `<h3></h3>`

  //     // Iterate through the technologies of the current type
  //     currentType.technologies.forEach((tech) => {
  //       // Create an element for each technology
  //       const techElement = document.createElement("p");
  //       techElement.innerHTML = `<span className="iconify" data-icon="${tech.icon}"></span> ${tech.name}`;
  //       accumulator.appendChild(techElement);
  //     });

  //     // Return the accumulator for the next iteration
  //     return accumulator;
  //   , showName: true }, '');
  //   console.log(test);
  //   return <div>{test}</div>;
};

export default SkillsMarquee;
