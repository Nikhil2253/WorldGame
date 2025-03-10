import { useContext, useState } from "react";
import { GameContext } from "../App.jsx";
import "../styles/GameDisplay.css";
import Economy from "../actions/Economy.jsx";
import Military from "../actions/Military.jsx";
import Infrastructure from "../actions/Infrastructure";
import Education from "../actions/Education.jsx";
import Territories from "../actions/Territories.jsx";

const GameDisplay = () => {
   const { state,actionType,setActionType } = useContext(GameContext);

  return (
    <>
      <div className="right-panel">
        <h2>Actions</h2>
        <button className="action-btn" onClick={()=>setActionType("Economy")}>Economy</button>
        <button className="action-btn" onClick={()=>setActionType("Military")}>Military</button>
        <button className="action-btn" onClick={()=>setActionType("Infrastructure")}>Infrastructure</button>
        <button className="action-btn" onClick={()=>setActionType("Education")}>Education and Research</button>
        <button className="action-btn" onClick={()=>setActionType("Territories")}>Territories</button>
      </div>
      {(actionType=="Economy") && <Economy />}
      {(actionType=="Military") && <Military />}
      {(actionType=="Infrastructure") && <Infrastructure />}
      {(actionType=="Education") && <Education />}
      {(actionType=="Territories") && <Territories />}
     
    </>
  );
};

export default GameDisplay;
