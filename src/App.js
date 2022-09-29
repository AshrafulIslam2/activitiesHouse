import { useEffect, useState } from "react";
import Activity from "./Components/Activity/Activity";
import ActivityDashBoard from "./Components/ActivityDashBoard/ActivityDashBoard";
import "./App.css";
import { FaCentos } from "react-icons/fa";
import QuestionAnswer from "./Components/QuestionAnswer/QuestionAnswer";
function App() {
  const [Activitys, SetActivitys] = useState([]);
  useEffect(() => {
    fetch("./activity.json")
      .then((res) => res.json())
      .then((data) => SetActivitys(data));
  }, []);
  return (
    <div
      className="main"
      style={{
        backgroundColor: "#E8E9EB",
      }}
    >
      <div>
        <FaCentos className="icon"></FaCentos>
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
        <div className="mainDashBorad">
          <ActivityDashBoard></ActivityDashBoard>
        </div>
        <div className="QuestionBlock">
          <QuestionAnswer></QuestionAnswer>
        </div>
      </div>
    </div>
  );
}

export default App;
