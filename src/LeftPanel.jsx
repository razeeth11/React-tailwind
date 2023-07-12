export function LeftPanel() {
  return (
    <div className="left-container">
      <div className="logo">
        <h2 className="logo-name">
          <span className="material-symbols-outlined logo-symbol">
            neurology
          </span>
          OPTIMED
        </h2>
      </div>
      <div className="left-panel">
        <div className="patients">
          <p className="patients-heading">PATIENTS</p>
          <p className="links">
            <span className="material-symbols-outlined">calendar_month</span>
            Schedule
          </p>
          <p className="links">
            <span className="material-symbols-outlined">recent_patient</span>
            Patients
          </p>
          <p className="links">
            <span className="material-symbols-outlined">task</span>
            Task
          </p>
          <p className="links">
            <span className="material-symbols-outlined">add</span>
            Add new patient
          </p>
        </div>
        <div className="staff">
          <p className="staff-heading">STAFF</p>
          <p className="links">
            <span className="material-symbols-outlined">person</span>
            Staff
          </p>
          <p className="links">
            <span className="material-symbols-outlined">calendar_month</span>
            Work schedule
          </p>
          <p className="links">
            <span className="material-symbols-outlined">add</span>
            Add new patient
          </p>
        </div>
        <div className="general">
          <p className="patients-heading">GENERAL</p>
          <p className="links">
            <span className="material-symbols-outlined">summarize</span>
            Reports
          </p>
          <p className="links">
            <span className="material-symbols-outlined">equalizer</span>
            Statistics
          </p>
          <p className="links">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </p>
          <p className="links">
            <span className="material-symbols-outlined">help</span>
            Help
          </p>
        </div>
      </div>
    </div>
  );
}
