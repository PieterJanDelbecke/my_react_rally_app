import { useContext } from "react";

import Context from "../context/context";


const Match = () => {
    const { context, setContext } = useContext(Context);

    console.log(context)

    return <h1>Match</h1>
}

export default Match
