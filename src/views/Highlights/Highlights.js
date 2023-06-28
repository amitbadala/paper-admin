import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import { Line, Pie, Bar } from "react-chartjs-2";

const Highlights = () => {
  return (
    <section className="section content" id="highlights">
      <Bar
        data={dashboard24HoursPerformanceChart.data}
        options={dashboard24HoursPerformanceChart.options}
        width={400}
        height={100}
      />
    </section>
  );
};

export default Highlights;
