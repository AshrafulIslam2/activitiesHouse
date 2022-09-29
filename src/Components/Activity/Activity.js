import React from "react";
import "./Activity.css";

const Activity = (props) => {
  // console.log(props);
  const { activity } = props;
  const { name, description, img, time } = props.activity;
  // const { button } = props;
  // const { isActive } = props;
  const { AddYourActivity } = props;
  //console.log(activity);
  return (
    <div className="activitySingalBlock">
      <div className="imgBG">
        <img src={img} alt="" srcset="" width={200} />
      </div>
      <h3>{name}</h3>
      <p style={{ fontSize: "15px", margin: "0", padding: "10px" }}>
        {description.slice(0, 152)}...
      </p>
      <p>Time:{time} Miniute</p>
      <button
        style={{
          cursor: "pointer",
          color: "White",
          fontWeight: "600",
          paddingTop: "14px",
          paddingBottom: "14px",
          paddingLeft: "8px",
          paddingRight: "8px",
          marginBottom: "10px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#0269A4",
        }}
        onClick={() => AddYourActivity({ activity })}
      >
        Add your Activity
      </button>
    </div>
  );
};

export default Activity;
