import { useContext } from "react";
import { GameContext } from "../App";
import "../styles/gdpGrowth.css"; 

const GDPgrowth = () => {
  const { state } = useContext(GameContext);

  return (
    <div className="gdp-box">
      {state.playerCountry&&<>
        <span className="gdp-label">GDP:</span>
        <span className="gdp-value">${state.playerCountry[3].toFixed(2)}{ `(in billion dollars)`}</span>
      </>
       }
      <span className="gdp-label">GDP Growth Rate:</span>
      <span className="gdp-value">{state.gdpGrowthrate.toFixed(2)}%</span>
        
    </div>
  );
};

export default GDPgrowth;
