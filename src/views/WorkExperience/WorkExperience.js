import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import AnimatedCards from "components/AnimatedCards/AnimatedCards";

function WorkExperience() {
  return (
    <div className="content" id="work-experience">
      <AnimatedCards />
    </div>
  );
}

export default WorkExperience;
