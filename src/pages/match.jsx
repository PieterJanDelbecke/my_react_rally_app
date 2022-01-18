import { useContext, useEffect, useState } from "react";

import Context from "../context/context";
import useTennisState from "../hooks/use-tennis-state";

const Match = () => {
  const { context, setContext } = useContext(Context);

  const { playerA, playerB, leftPlayer: initialLeftPlayer, server: initialServer ,sets} = context;

  const {
    pointToLeft,
    pointToRight,
    pointsA,
    pointsB,
    scoreA,
    scoreB,
    server,
    receiver,
    leftPlayer,
    rightPlayer,
    leftPoints,
    rightPoints,
    winner,
  } = useTennisState(playerA, playerB, initialLeftPlayer, initialServer, sets);

  return (
    <>
        <div>
            {playerA} {server == playerA && " (S)"}
        </div>
        <div>
            {scoreA.map((gameScore, i) =>(
                <span key={i}>{gameScore}</span>
            ))}
            <span key="points"> - {pointsA}</span>
        </div>
        <div>
            {playerB} {server == playerB && " (S)"}
        </div>
        <div>
            {scoreB.map((gameScore,i)=>(
                <span key={i}>{gameScore}</span>
            ))}
            <span key="points"> - {pointsB}</span>
        </div>
        <div>Left: {leftPlayer}</div>
        <div>Right: {rightPlayer}</div>
        <div>
            <button onClick={pointToLeft}>{leftPoints}</button>
            <button onClick={pointToRight}>{rightPoints}</button>
        </div>
        {winner && <div>{winner}</div>}
    </>
  );
};

export default Match;
