import { useState, useContext } from "react";
import "../styles/actions.css";
import { GameContext } from "../App";

const Military = () => {
  const { state, dispatch, setActionType } = useContext(GameContext);
  const [selectedFactor, setSelectedFactor] = useState("");
  const [purchaseAmounts, setPurchaseAmounts] = useState({}); 

  const handlePurchase = (factor, upgrade, amount) => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount to purchase.");
      return;
    }

    const totalCost = amount * upgrade.costPerUnit;

    if (state.budget < totalCost) {
      alert("Not enough money!");
    } else {
      console.log(`Purchased ${amount} ${upgrade.name} for $${totalCost.toLocaleString()}`);

      const updatedUpgrades = {
        ...state.militaryUpgrade,
        [factor]: state.militaryUpgrade[factor].map((item) =>
          item.name === upgrade.name
            ? { ...item, amount: (item.amount || 0) + amount }
            : item
        ),
      };

      dispatch({
        type: "PURCHASE_MILITARY",
        payload: {
          cost: totalCost,
          updatedUpgrades:updatedUpgrades,
        },
      });

      setPurchaseAmounts((prev) => ({ ...prev, [upgrade.name]: "" }));
    }
  };

  return (
    <div className="action-main-container">
      <div className="action-head-nav">
        <div className="action-type-name">Military</div>
        <div className="action-cross" onClick={() => setActionType("")}>X</div>
      </div>

      {!selectedFactor && (
        <div className="action-defining-divs">
          {Object.keys(state.militaryUpgrade).map((factor) => (
            <div
              key={factor}
              className="actions-div"
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
          {state.militaryUpgrade[selectedFactor].map((upgrade, index) => (
            <div key={index} className="upgrade-item">
              <span>{upgrade.name}</span>
              <div className="upgrade-info">
                <span>Cost per unit: <span style={{marginLeft:"20px",color:"#00ff00"}}>${upgrade.costPerUnit.toLocaleString()}</span></span>
                <span>Owned: {upgrade.amount || 0}</span>
              </div>
              <div className="purchase-controls">
                <input
                  type="number"
                  min="1"
                  value={purchaseAmounts[upgrade.name] || ""}
                  onChange={(e) =>
                    setPurchaseAmounts((prev) => ({
                      ...prev,
                      [upgrade.name]: e.target.value,
                    }))
                  }
                  placeholder="Enter amount"
                />
                <button
                  className="buy-btn"
                  onClick={() =>
                    handlePurchase(selectedFactor, upgrade, Number(purchaseAmounts[upgrade.name]))
                  }
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Military;
