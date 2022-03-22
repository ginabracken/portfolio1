import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ setPageState }) => {
  const [checked, setChecked] = useState([]);
  const checkList = [
    "Burpees",
    "Pushups",
    "Situps",
    "Jumping Jacks",
    "Running",
    "Bicycling",
  ];


  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div className="title">What workouts did you do today?:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>{`Workouts Completed: ${checkedItems}`}</div>
      <button onClick={() => setPageState("index")}>Return</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
