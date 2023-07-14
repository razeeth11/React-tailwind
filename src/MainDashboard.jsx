import Chart from "react-google-charts";
import React from "react";

export function MainDashboard() {
  return (
    <div className="main-dashboard">
      <AddTaskComp />
      <ChartComp />
      <StatisticsComp />
    </div>
  );
}
function AddTaskComp() {
  return (
    <div className="main-dashboard-comp">
      <div className="add-task-comp">
        <p className="add-task-heading">Profit for February</p>
        <h1 className="add-task-profit">$ 16 025</h1>
        <p className="add-task-arrow">
          <span className="material-symbols-outlined">call_made</span>
          <span className="percentage">+ 0.46</span>
          more than a last week
        </p>
      </div>
      <div className="add-task-comp">
        <p className="add-task-heading">Services Provided</p>
        <h1 className="add-task-profit">35</h1>
        <p className="add-task-arrow">
          <span className="material-symbols-outlined">call_made</span>
          <span className="percentage">+ 0.35</span>
          more than a last week
        </p>
      </div>
      <div className="add-task-comp">
        <p className="add-task-heading">New Patients</p>
        <h1 className="add-task-profit">325</h1>
        <p className="add-task-arrow">
          <span className="material-symbols-outlined">call_made</span>
          <span className="percentage">+ 0.12</span>
          more than a last week
        </p>
      </div>
      <div className="add-task-button">
        <p className="add-task-head">ADD A TASK</p>
        <span className="material-symbols-outlined data-saver">
          data_saver_on
        </span>
      </div>
    </div>
  );
}
function ChartComp() {
  const LineData = [
    ["x", "dogs", "cats"],
    ["Jan", 0, 0],
    ["Feb", 10, 5],
    ["Mar", 23, 15],
    ["Apr", 17, 9],
    ["May", 18, 10],
    ["June", 9, 5],
    ["July", 11, 3],
    ["Aug", 27, 19],
    ["Sep", 27, 19],
    ["Oct", 27, 19],
    ["Nov", 27, 19],
    ["Dec", 27, 19],
  ];
  const LineChartOptions = {
    series: {
      1: { curveType: "function" },
    },
  };

  return (
    <div className="chart-comp">
      <div className="doc-comp">
        <div className="doctors-comp">
          <div className="doc-head-comp">
            <p className="doc-title">Employees on Shift</p>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </div>
        <div className="doctors-list">
          <div className="chief">
            <div className="left-doc">
              <p>Chief</p>
              <p>On Shift : 1 person</p>
            </div>
            <div className="right-doc">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                alt="doctor-image"
              />
            </div>
          </div>
          <div className="docs">
            <div className="left-doc">
              <p>Doctors</p>
              <p>On Shift : 5 Doctors</p>
            </div>
            <div className="right-doc">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                alt="doctor-image"
              />
            </div>
          </div>
          <div className="nurses">
            <div className="left-doc">
              <p>Nurses</p>
              <p>On Shift : 2 Nurses</p>
            </div>
            <div className="right-doc">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                alt="doctor-image"
              />
            </div>
          </div>
          <div className="orderlies">
            <div className="left-doc">
              <p>Orderlies</p>
              <p>On Shift : 3 persons</p>
            </div>
            <div className="right-doc">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                alt="doctor-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="graph-chart-comp">
        <Chart
          className="chart-graph"
          width={"100%"}
          height={"100%"}
          chartType="LineChart"
          data={LineData}
          options={LineChartOptions}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </div>
  );
}
function StatisticsComp() {
  return (
  <div className="statistics-comp">
    
  </div>
  );
}
