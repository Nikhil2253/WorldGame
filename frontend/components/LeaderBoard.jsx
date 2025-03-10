import { useContext, useState } from "react";
import { GameContext } from "../App";
import "../styles/LeaderBoard.css";
import RankTable from "./RankTable";

const LeaderBoard = () => {
  const { leaderBoard, setLeaderBoard } = useContext(GameContext);
  const [leadType, setLeadType] = useState("Overall");

  return (
    <>
      <div className="leaderboard">
        <div className="lead-head">
          <h1 className="lead-heading">Countries LeaderBoard</h1>
          <div className="lead-cross" onClick={() => setLeaderBoard(false)}>X</div>
        </div>
        <div className="lead-nav">
          <button
            className={`lead-rank-buttons ${leadType === "Overall" ? "active" : ""}`}
            onClick={() => setLeadType("Overall")}
          >
            All Countries
          </button>
          <button
            className={`lead-rank-buttons ${leadType === "GDP" ? "active" : ""}`}
            onClick={() => setLeadType("GDP")}
          >
            GDP Rank
          </button>
          <button
            className={`lead-rank-buttons ${leadType === "Population" ? "active" : ""}`}
            onClick={() => setLeadType("Population")}
          >
            Population Rank
          </button>
          <button
            className={`lead-rank-buttons ${leadType === "Military" ? "active" : ""}`}
            onClick={() => setLeadType("Military")}
          >
            Military Rank
          </button>
          <button
            className={`lead-rank-buttons ${leadType === "Territory" ? "active" : ""}`}
            onClick={() => setLeadType("Territory")}
          >
            Territory
          </button>
          <button
            className={`lead-rank-buttons ${leadType === "Education" ? "active" : ""}`}
            onClick={() => setLeadType("Education")}
          >
            Education
          </button>
        </div>
        <div className="rank-holder">
          <RankTable leadType={leadType} />
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
