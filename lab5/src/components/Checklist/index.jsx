import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ setPageState }) => {
  const [checked, setChecked] = useState([]);
  const listItems = [
    "Burpees",
    "Pushups",
    "Situps",
    "Jumping Jacks",
    "Running",
    "Bicycling",
  ];


  const checkList = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };


  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div>What workouts did you do today?:</div>
        <div className="list-container">
          {listItems.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={checkList} />
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
