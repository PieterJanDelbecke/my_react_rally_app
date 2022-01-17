import { useEffect, useState } from "react";

const useTennisState = (
  playerA,
  playerB,
  initialLeftPlayer,
  initialServer,
  sets
) => {

    const [server, setServer] = useState(initialServer)
    const [receiver, setReceiver] = useState(null)

    const [leftPlayer, setLeftPlayer] = useState(initialLeftPlayer)
    const [rightPlayer, setRightPlayer] = useState(null)

    const [pointsA, setPointsA] = useState("0")
    const [pointsB, setPointsB] = useState("0")

    const [leftPoints,setLeftPoints] = useState("0")
    const [rightPoints, setRightPoints] = useState("")

    const [scoreA, setScoreA] = useState([0])
    const [scoreB, setScoreB] = useState([0])

    const [winner, setWinner] = useState(null)
    
    
    useEffect(()=>{
        setReceiver( server === playerA ? playerB : playerA )
    },[server])

    useEffect(() =>{
        setRightPlayer( leftPlayer === playerA ? playerB : playerA )
    },[leftPlayer])

    const pointToLeft = () =>{

    }

    const pointToRight = () =>{

    }

    return {
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
        winner
    }
};

export default useTennisState;
