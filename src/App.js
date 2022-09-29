import { useEffect, useState } from "react";
import Activity from "./Components/Activity/Activity";
import ActivityDashBoard from "./Components/ActivityDashBoard/ActivityDashBoard";
import "./App.css";
import { FaCentos } from "react-icons/fa";
function App() {
  const [Activitys, SetActivitys] = useState([]);
  useEffect(() => {
    fetch("./activity.json")
      .then((res) => res.json())
      .then((data) => SetActivitys(data));
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <div>
        <FaCentos className="yes"></FaCentos>
        <h3
          style={{
            color: "#363636",
            textAlign: "center",
            display: "inline-block",
            // background: "red",
            margin: "0",
            eft: "4px",
            fontSize: "40px",
            letterSpacing: "3px",
          }}
        >
          Nur Activity House
        </h3>
      </div>
      <div className="ActivityMainBlock">
        <div className="ActivityItemBlock">
          {Activitys.map((activity) => (
            <Activity key={activity.id} activity={activity}></Activity>
          ))}
        </div>
        <div>
          <ActivityDashBoard></ActivityDashBoard>
        </div>
      </div>
    </div>
  );
}

export default App;
