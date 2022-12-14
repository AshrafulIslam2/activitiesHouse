import { useEffect, useState } from "react";
import Activity from "./Components/Activity/Activity";
import ActivityDashBoard from "./Components/ActivityDashBoard/ActivityDashBoard";
import "./App.css";
import { FaCentos } from "react-icons/fa";
import QuestionAnswer from "./Components/QuestionAnswer/QuestionAnswer";
import { AddtoDb, getDataFromCart } from "./Components/AddToDb";
function App() {
  const [Activitys, SetActivitys] = useState([]);
  // const [buttonText, setButtonText] = useState("Add Your Activity");
  const [AddBreak, setBreak] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [ActivityForDashBoard, setActivityForDashBoard] = useState([]);

  useEffect(() => {
    fetch("./activity.json")
      .then((res) => res.json())
      .then((data) => SetActivitys(data));
  }, []);
  const AddYourActivity = (activity) => {
    let NewActivity = [];
    if (Activitys.id === activity.id) {
      NewActivity = [...ActivityForDashBoard, activity];
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    setActivityForDashBoard(NewActivity);
  };
  const addbreak = (time) => {
    setBreak(time);
    AddtoDb(time);
  };
  useEffect(() => {
    let productsfromCart = getDataFromCart();
    if (productsfromCart) {
      let Time = productsfromCart.BreakTime;
      setBreak(Time);
    } else {
      setBreak(0);
    }
    // const { BreakTime } = productsfromCart;
    // console.log(BreakTime);
    // setBreak(BreakTime);
  }, [AddBreak]);
  // console.log(ActivityForDashBoard);
  return (
    <div className="main">
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
            <Activity
              key={activity.id}
              activity={activity}
              // button={buttonText}
              isActive={isActive}
              AddYourActivity={AddYourActivity}
            ></Activity>
          ))}
        </div>
        <div className="mainDashBorad">
          <ActivityDashBoard
            ActivityForDashBoard={ActivityForDashBoard}
            addbreak={addbreak}
            AddBreak={AddBreak}
          ></ActivityDashBoard>
        </div>
        <div className="QuestionBlock">
          <QuestionAnswer></QuestionAnswer>
        </div>
      </div>
    </div>
  );
}

export default App;
