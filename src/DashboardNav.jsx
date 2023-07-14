export function DashboardNav() {
  return (
    <div className="dashboard-nav">
      <div className="search-bar">
        <div className="search">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search file, person, service" />
        </div>
        <div className="acc-section">
          <span className="material-symbols-outlined">mode_comment</span>
          <span className="material-symbols-outlined">notifications</span>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            alt="account-image" />
        </div>
      </div>
    </div>
  );
}
