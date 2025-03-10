import { useContext } from "react";
import  {GameContext}  from "../App";
import "../styles/mystat.css"

const MyStats = () => {
  const { state } = useContext(GameContext);

  return (
    <div className="stat-board">
      
          <div className="stat-strip">
            <span className="stat-name">{state.playerCountry[1]}</span>
            <span className="stat-item">Population:{state.playerCountry[2].toFixed(1)} M</span>
            <span className="stat-item">Budget: ${state.budget.toFixed(2)} </span>
            <span className="stat-item">Military Strength:{state.playerCountry[4].toFixed(2)} </span>
            <span className="stat-item">Education:{state.playerCountry[5]}</span>
          </div>
        
     
    </div>
  );
};

export default MyStats;
