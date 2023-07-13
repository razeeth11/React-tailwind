import "./Styles/App.css";
import { Dashboard } from "./Dashboard";
import { LeftPanel } from "./LeftPanel";

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <Dashboard />
    </div>
  );
}

export default App;
