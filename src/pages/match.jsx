import { useContext , useEffect, useState} from "react";

import Context from "../context/context";


const Match = () => {
    const { context, setContext } = useContext(Context);
    const { playerA, playerB , server: initialServer} = context

    const [server,setServer] = useState(initialServer)
    const [receiver, setReceiver] = useState(null)

    const [pointsA, setPointsA] = useState("0")
    const [pointsB, setPointsB] = useState("0")

    useEffect(()=>{
        setReceiver(server == playerA ? playerB : playerA)
    },[server])

    const handleClick = (event) =>{
        setServer(receiver)
    }

   const pointToPlayerA = () =>{
       switch(pointsA){
           case "0":
                setPointsA("15")
                break
            case "15":
                setPointsA("30")
                break
            case "30":
                setPointsA("40")
                break
            case "40":
                setPointsA("0")
                break
       }
   }

   const pointToPlayerB = () =>{
    switch(pointsB){
        case "0":
             setPointsB("15")
             break
         case "15":
             setPointsB("30")
             break
         case "30":
             setPointsB("40")
             break
         case "40":
             setPointsB("0")
             break
    }

   }

    return (
        <>  
            <div>
                <h2>{playerA} {server === playerA && "- serving"}</h2>

            </div>
            <div>
                <h2>{playerB} {server === playerB && "- serving"}</h2>
            </div>   
            <div>
                <p>{playerA}</p>
                <button onClick={pointToPlayerA}>Point To Player A</button>
                <p>{pointsA}</p>
            </div>
            <div>
                <p>{playerB}</p>
                <button onClick={pointToPlayerB}>Point To Player B</button>
                <p>{pointsB}</p>
            </div>

        </>
    )
}

export default Match
