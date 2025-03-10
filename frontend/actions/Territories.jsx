import { useContext } from "react";
import "../styles/actions.css";
import { GameContext } from "../App";

const Territories = () => {
  const { state, setActionType } = useContext(GameContext);
  const territories = state.territories;

  return (
    <div className="action-main-container">
      <div className="action-head-nav">
        <div className="action-type-name">Territories</div>
        <div className="action-cross" onClick={() => setActionType("")}>
          X
        </div>
      </div>

      <div className="territories">
        <h2>Your Territories</h2>
        {territories.length === 0 ? (
          <p>You havent conquered any territories yet!</p>
        ) : (
          <div className="territory-cards-container">
            {territories.map((territory) => (
              <div
                key={territory[0]}
                className="territory-card"
                style={{ backgroundColor: territory[8] }}
              >
                <h3>{territory[1]}</h3>
                <p>Population: {territory[2]}M</p>
                <p>GDP: ${territory[3]}T</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Territories;
