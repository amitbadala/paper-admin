import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import WorkExperience from "views/WorkExperience";
// import UpgradeToPro from "views/Upgrade.js";

var routes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-bank",
  //   component: <Dashboard />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: <UserPage />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  {
    path: "#about",
    name: "About",
    emoji: <span>👨‍🎨</span>,
    component: <Typography />,
    layout: "/admin",
  },
  {
    path: "#work-experience",
    name: "Work Experience",
    emoji: "💼",
    component: <WorkExperience />,
    layout: "/admin",
  },
  {
    path: "#blogs",
    name: "Blog",
    emoji: "✍️",
    component: <WorkExperience />,
    layout: "/admin",
  },
  {
    path: "#Highlight",
    name: "Highlight",
    emoji: "📌",
    component: <WorkExperience />,
    layout: "/admin",
  },
  {
    path: "#contact",
    name: "Contact",
    emoji: "☎️",
    component: <WorkExperience />,
    layout: "/admin",
  },
];
export default routes;
