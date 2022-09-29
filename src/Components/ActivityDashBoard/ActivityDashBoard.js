import React from "react";
import "./ActivityDashBoard.css";
const ActivityDashBoard = (props) => {
  console.log(props);
  const { AddBreak } = props;
  const { addbreak } = props;
  const { ActivityForDashBoard } = props;
  let TotalTime = 0;
  ActivityForDashBoard.forEach((active) => {
    let time = active.activity.time;
    TotalTime += time;
    // console.log(TotalTime);
  });
  return (
    <div className="ActivityDashBoardMain">
      <div className="informationSection">
        <img src={require("../image/Ashraful_Islam.PNG")} alt="" width={80} />
        <div>
          <h5>Ashraful Islam</h5>
          <p>Chattogram ,Bangladesh</p>
        </div>
      </div>
      <div className="HealthInformation">
        <div>
          <h5>
            <span className="nameofInformation">75</span>
            <small>kg</small>
          </h5>
          <h5>Weight</h5>
        </div>
        <div>
          <h5>
            <span className="nameofInformation">6.7</span>
            <small>inch</small>
          </h5>
          <h5>Hight</h5>
        </div>
        <div>
          <h5>
            <span className="nameofInformation">27</span>
            <small>year</small>
          </h5>
          <h5>Age</h5>
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>Add A Break</h3>
      <div className="buttonBreak">
        <button onClick={() => addbreak(10)}>
          10 <span>M</span>
        </button>
        <button onClick={() => addbreak(20)}>
          20 <span>M</span>
        </button>
        <button onClick={() => addbreak(30)}>
          30 <span>M</span>
        </button>
        <button onClick={() => addbreak(50)}>
          50 <span>M</span>
        </button>
        <button onClick={() => addbreak(60)}>
          60 <span>M</span>
        </button>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Exercise Details</h3>
      </div>
      <div className="ExerciseDiv">
        <div className="ActivityDivfinal">
          <h3>Activity Time</h3>
          <p>{TotalTime} M</p>
        </div>
      </div>
      <div className="ExerciseDiv">
        <div className="ActivityDivfinal">
          <h3>Break Time</h3>
          <p>{AddBreak} M</p>
        </div>
      </div>
      <button className="Complete">complete Activity</button>
    </div>
  );
};

export default ActivityDashBoard;
