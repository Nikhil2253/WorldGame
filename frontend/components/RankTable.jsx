import { GameContext } from "../App";
import { useState, useEffect, useContext } from "react";

const RankTable = ({ leadType }) => {
  const { state } = useContext(GameContext);
  const [content, setContent] = useState([]);
  const [table, setTable] = useState([]);

  const quickSort = (arr, key) => {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][key] >= pivot[key]) left.push(arr[i]);
      else right.push(arr[i]);
    }
    return [...quickSort(left, key), pivot, ...quickSort(right, key)];
  };
  
  const showGdpRank = () => {
    let newState = quickSort([...state.data.slice(1)], 3);
    setContent([state.data[0], ...newState]);
    setTable(
      newState.map((e, index) => (
        <div key={index} className="ranked-cont-rows">
          <div className="ranked-data">{index + 1}</div>
          <div className="ranked-data">{e[1]}</div>
          <div className="ranked-data">{e[3].toFixed(3)}</div>
        </div>
      ))
    );
  };
  
  const showPopulationRank = () => {
    let newState = quickSort([...state.data.slice(1)], 2);
    setContent([state.data[0], ...newState]);
    setTable(
      newState.map((e, index) => (
        <div key={index} className="ranked-cont-rows">
          <div className="ranked-data">{index + 1}</div>
          <div className="ranked-data">{e[1]}</div>
          <div className="ranked-data">{e[2]}</div>
        </div>
      ))
    );
  };
  
  const showMilitaryRank = () => {
    let newState = quickSort([...state.data.slice(1)], 4);
    setContent([state.data[0], ...newState]);
    setTable(
      newState.map((e, index) => (
        <div key={index} className="ranked-cont-rows">
          <div className="ranked-data">{index + 1}</div>
          <div className="ranked-data">{e[1]}</div>
          <div className="ranked-data">{e[4]}</div>
        </div>
      ))
    );
  };
  
  const showEducationRank = () => {
    let newState = quickSort([...state.data.slice(1)], 5);
    setContent([state.data[0], ...newState]);
    setTable(
      newState.map((e, index) => (
        <div key={index} className="ranked-cont-rows">
          <div className="ranked-data">{index + 1}</div>
          <div className="ranked-data">{e[1]}</div>
          <div className="ranked-data">{e[5]}</div>
        </div>
      ))
    );
  };
  
  const showTerritory = () => {
    let newState = quickSort([...state.data.slice(1)], 7);
    setContent([state.data[0], ...newState]);
    setTable(
      newState.map((e, index) => (
        <div key={index} className="ranked-cont-rows">
          <div className="ranked-data">{index + 1}</div>
          <div className="ranked-data">{e[1]}</div>
          <div className="ranked-data">{e[7]}</div>
        </div>
      ))
    );
  };
  

  const showOverall = () => {
    setContent([...state.data]);
    
    console.log("Runs Overall")
    setTable(
      state.data.map((e, index) => {
        if (index != 0) {
          return (
            <>
              <div key={index} className="ranked-cont-rows">
                <div className="ranked-data">{index}</div>
                <div className="ranked-data">{e[1]}</div>
                <div className="ranked-data">{e[2]}</div>
                <div className="ranked-data">{e[3]}</div>
                <div className="ranked-data">{e[4]}</div>
              </div>
            </>
          );
        }
        else{
          return (
            <>
              <div key={index} className="ranked-cont-rows">
                <div className="ranked-data">S.No.</div>
                <div className="ranked-data">Country Name</div>
                <div className="ranked-data">{e[2]}</div>
                <div className="ranked-data">{e[3]}</div>
                <div className="ranked-data">{e[4]}</div>
              </div>
            </>
          );
        }
      })
    );
  };

  useEffect(() => {
    if (!state.data || state.data.length === 0) return;
    if (leadType === "Overall") {
      showOverall();
    } else if (leadType === "GDP") {
      showGdpRank();
    } else if (leadType == "Population") {
      showPopulationRank();
    } else if (leadType == "Military") {
      showMilitaryRank();
    } else if (leadType == "Education") {
      showEducationRank();
    } else if (leadType == "Territory") {
      showTerritory();
    }
  }, [state, leadType]);

  useEffect(() => {
    showOverall();
  }, []);

  return (
    <div>
      <div className="rank-of-countries">{table}</div>
    </div>
  );
};

export default RankTable;
