import React from "react";
import "./Qs.css";

const QuestionAnswer = () => {
  return (
    <div className="QuestionDiv">
      <div className="innerQuestion">
        <h1>How Does React Work?</h1>
        <p>
          Ans:ReactJS divides the UI into isolated reusable pieces of code known
          as components. React components work similarly to JavaScript functions
          as they accept arbitrary inputs called properties or props. It's
          possible to have as many components as necessary without cluttering
          your code
        </p>
      </div>
      <div className="innerQuestion">
        <h1>Difference Between State And Props?</h1>
        <p>
          Ans: PROPS: The Data is passed from one component to another.<br></br>
          It is Immutable (cannot be modified).<br></br>Props can be used with
          state and functional components.<br></br>Props are read-only.
          <br></br>
          <hr />
          STATE: The Data is passed within the component only.<br></br>It is
          Mutable ( can be modified).<br></br>State can be used only with the
          state components/class component (Before 16.0).<br></br>State is both
          read and write.
        </p>
      </div>
      <div className="innerQuestion">
        <h1>Work oF Use Effect?</h1>
        <p>
          Ans: By using this Hook, you tell React that your component needs to
          do something after render. React will remember the function you passed
          (we’ll refer to it as our “effect”), and call it later after
          performing the DOM updates. In this effect, we set the document title,
          but we could also perform data fetching or call some other imperative
          API.
        </p>
      </div>
    </div>
  );
};

export default QuestionAnswer;
