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
            {playerA}
        </div>
        <div>
            {playerB}
        </div>

    </>
  );
};

export default Match;
