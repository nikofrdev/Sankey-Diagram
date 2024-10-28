import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import FilterPanel from "./components/FilterPanel";
import IndicatorBlock from "./components/IndicatorBlock";
import DataTable from "./components/DataTable";
import SankeyChart from "./components/SankeyChart";
import { DashboardProvider } from './components/DashboardContext';
import "./App.css";

const App: React.FC = () => {
 

  return (
    <DashboardProvider>
       <div className="dashboard">
      <DashboardHeader />
      <FilterPanel  />
      <div className="dashboard-body">
        <div>
          <IndicatorBlock  />
          <DataTable />
        </div>
        <SankeyChart />
      </div>
    </div>
    </DashboardProvider>
   
  );
};

export default App;
