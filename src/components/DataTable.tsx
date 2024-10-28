import React, { useState } from "react";
import { useDashboard } from "./DashboardContext";

const DataTable: React.FC = () => {
  const { filteredData } = useDashboard();
  const [activeTab, setActiveTab] = useState<"clients" | "branches">("clients");

  const tableData = filteredData[0]?.table || [];

  const handleTabChange = (tab: "clients" | "branches") => {
    setActiveTab(tab);
  };

  return (
    <div className="data-table">
      <div className="tab-header">
        <button
          className={activeTab === "clients" ? "active" : ""}
          onClick={() => handleTabChange("clients")}
        >
          По клиентам
        </button>
        <button
          className={activeTab === "branches" ? "active" : ""}
          onClick={() => handleTabChange("branches")}
        >
          По филиалам
        </button>
      </div>

      <h3>Таблица 1</h3>
      <table>
        <thead>
          <tr>
            <th>Наименование клиента</th>
            <th>31.12.23</th>
            <th>16.10.24</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            const progressPercentage = (row.value / 1400) * 100;
            const changeValue = 200;

            return (
              <tr key={index}>
                <td className="name-cell">
                  {row.name}
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </td>
                <td>{row.value}</td>
                <td>{row.value + changeValue}</td>
                <td>
                  <div className="indicator-icon">▲</div>
                </td>
                <td>{changeValue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
