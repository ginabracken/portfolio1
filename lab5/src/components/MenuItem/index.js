import React, { useState } from "react";
import Pushup from "../Push";
import Bike from "../Bike";
import Jump from "../Jump";
import Run from "../Run";
import Situp from "../Situp";

const MenuItem = (props) => {
  const [pageState, setPageState] = useState("index");
  return (
    <div>
      {pageState === "index" ? (
        <ButtonGroup
          pageState={pageState}
          setPageState={setPageState}
          itemDescription={props.data.itemDescription}
        />
      ) : null}
      {pageState === "pushups" ? <Pushup setPageState={setPageState} /> : null}
      {pageState === "bicycling" ? <Bike setPageState={setPageState} /> : null}
      {pageState === "jumpingjacks" ? (
        <Jump setPageState={setPageState} />
      ) : null}
      {pageState === "running" ? <Run setPageState={setPageState} /> : null}
      {pageState === "situps" ? <Situp setPageState={setPageState} /> : null}
  
    </div>
  );
};

const ButtonGroup = ({ itemDescription, pageState, setPageState }) => {
  return (
    <>
      
      <p>{itemDescription}</p>
      <button onClick={() => setPageState("pushups")}>Push Ups</button>
      <button onClick={() => setPageState("bicycling")}>Bicycling</button>
      <button onClick={() => setPageState("jumpingjacks")}>
        Jumping Jacks
      </button>
      <button onClick={() => setPageState("running")}>Running</button>
      <button onClick={() => setPageState("situps")}>Sit Ups</button>
    </>
  );
};
export default MenuItem;
