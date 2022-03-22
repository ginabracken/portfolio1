import "./App.css";
import Menu from "./components/Menu";
import React from "react";
import Stylesheet from "./components/Stylesheets";


function App() {
  let menuData = [
    {
      menuId: "menu1",
      menuName: "Go Do Something!",
      menuItems: [
        {
          itemId: 1,
          itemDescription: "Pick an excercise:",
        },
      ],
    },
  ];

  return (
    <div className="App">
   
      {menuData.map((menu) => {
      <Stylesheet />
        return <Menu key={menu.menuId} data={menu} />;
      })}
    </div>
  );
}

export default App;
