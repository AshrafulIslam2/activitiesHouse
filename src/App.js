import { useEffect, useState } from "react";
import Activity from "./Components/Activity/Activity";
import ActivityDashBoard from "./Components/ActivityDashBoard/ActivityDashBoard";
import "./App.css";
function App() {
  const [Activitys, SetActivitys] = useState([]);
  useEffect(() => {
    fetch("./activity.json")
      .then((res) => res.json())
      .then((data) => SetActivitys(data));
  }, []);
  return (
    <div>
      {/* <h1 style={{ display: "inline-block", background: "red" }}>
        Ashraful Islam
      </h1> */}
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
