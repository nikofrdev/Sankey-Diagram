import React from "react";
import ReactEcharts from "echarts-for-react";
import { useDashboard } from "./DashboardContext";

const IndicatorBlock: React.FC = () => {
  const { filteredData } = useDashboard();

  const data = filteredData[0]?.indicator;
  const groups = filteredData[0]?.indicator.groups || [];

  if (!data) return null;

  const chartOptions = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: [
        "31.12.23",
        "15.01.24",
        "31.01.24",
        "15.02.24",
        "28.02.24",
        "15.03.24",
        "30.03.24",
        "16.10.24",
      ],
      boundaryGap: false,
      axisLabel: {
        rotate: 90,
        margin: 25,
        align: "center",
        fontSize: 8,
        fontWeight: "bold",
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: data.title,
        type: "line",
        bottom: "10%",
        data: [2800, 2850, 2900, 2950, 3000, 3050, 3100, data.value],
        areaStyle: {},
        smooth: true,
      },
    ],
  };

  return (
    <div className="indicator-block">
      <div className="indicator-header">
        <h2>{data.title}</h2>
        <span>{data.unit}</span>
      </div>
      <div className="indicator-block-two">
        <div className="indicator-block-three">
          <div className="indicator-value">{data.value}</div>
          <div className="progress-bar-container">
            <div
              className="progress-group"
              style={{ width: `${(groups[0].value / data.value) * 100}%` }}
            ></div>
            <div
              className="progress-group"
              style={{
                width: `${(groups[1].value / data.value) * 100}%`,
                backgroundColor: "#ccc",
              }}
            ></div>
          </div>
          <div className="indicator-groups">
            {groups.map((group, index) => (
              <div key={index} className="group">
                <span>{group.value}</span>
                <span>{group.name}</span>
              </div>
            ))}
          </div>
        </div>

        <ReactEcharts option={chartOptions} />
      </div>
    </div>
  );
};

export default IndicatorBlock;
