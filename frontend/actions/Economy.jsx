import { useState, useContext, useEffect } from "react";
import "../styles/actions.css";
import { GameContext } from "../App";

const Economy = () => {
  const { state, dispatch, setActionType } = useContext(GameContext);
  const [selectedFactor, setSelectedFactor] = useState("");
  const [upgrades, setUpgrades] = useState(state.economyUpgrade);

  const handleUpgrade = (upgradeName, index) => {
    const currentProgress = upgrades[selectedFactor][index].percent;

    if (currentProgress < 100 && state.budget >= upgrades[selectedFactor][index].cost) {
      dispatch({ type: "UPDATE_COST", payload: upgrades[selectedFactor][index].cost });
      dispatch({ type: "UPDATE_GDP_GROWTHRATE", payload: upgrades[selectedFactor][index].rate });

      setUpgrades((prev) => ({
        ...prev,
        [selectedFactor]: prev[selectedFactor].map((upgrade, i) =>
          i === index ? { ...upgrade, percent: Math.min(upgrade.percent + 10, 100) } : upgrade
        ),
      }));
    }
  };
  useEffect(()=>{
    dispatch({type:"ECO_UPGRADE",payload:upgrades});
  },[upgrades]);

  return (
    <div className="action-main-container">
      <div className="action-head-nav">
        <div className="action-type-name">Economy</div>
        <div className="action-cross" onClick={() => setActionType("")}>X</div>
      </div>

      {!selectedFactor && (
        <div className="action-defining-divs">
          {Object.keys(upgrades).map((factor) => (
            <div
              key={factor}
              className={`actions-div ${selectedFactor === factor ? "selected" : ""}`}
              onClick={() => setSelectedFactor(factor)}
            >
              {factor}
            </div>
          ))}
        </div>
      )}

      {selectedFactor && (
        <div className="upgrades-container">
          <div className="upgrade-details">
            <div className="up-name">{selectedFactor}</div>
            <button className="up-close" onClick={() => setSelectedFactor("")}>X</button>
          </div>
          {upgrades[selectedFactor].map((upgrade, index) => (
            <div key={index} className="upgrade-item">
              <span>{upgrade.name}</span>
              <div className="progress-and-button">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${upgrade.percent}%` }}
                  ></div>
                </div>
                <div>${upgrade.cost}</div>
                <button
                  className="upgrade-btn"
                  onClick={() => handleUpgrade(upgrade.name, index)}
                  disabled={upgrade.percent >= 100 || state.budget < upgrade.cost}
                >
                  Upgrade
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Economy;
