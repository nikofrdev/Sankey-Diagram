import React from "react";
import ReactEcharts from "echarts-for-react";
import { useDashboard } from "./DashboardContext";

const SankeyChart: React.FC = () => {
  const { sankeyData } = useDashboard();

  const chartOptions = {
    title: {
      text: "ДИАГРАММА САНКЕЙ",
      left: "5%",
    },
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: {
      type: "sankey",
      data: sankeyData.nodes,
      links: sankeyData.links,
      emphasis: {
        focus: "adjacency",
      },
      left: "5%",
      top: "15%",
      width: "80%",
      height: "80%",
    },
  };

  return (
    <div className="sankey-chart">
      <ReactEcharts
        option={chartOptions}
        style={{ height: "500px", width: "100%" }}
      />
    </div>
  );
};

export default SankeyChart;
