import "./Styles/App.css";
import { DashboardNav } from "./DashboardNav";
import { LeftPanel } from "./LeftPanel";
import React, { Component } from "react";
import { MainDashboard } from "./MainDashboard";

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <DashboardNav />
      <MainDashboard />
    </div>
  );
}

export default App;
