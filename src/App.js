import { useEffect } from "react";
import "./App.css";

function App() {
  //const [Activity, SetActivity] = useState([]);
  useEffect(() => {
    fetch("./activity.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div className="App"></div>;
}

export default App;
