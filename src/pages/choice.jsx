import { useContext } from "react";
import { useNavigate } from "react-router-dom"

import Context from "../context/context";

const Choice = () => {
  const { context, setContext } = useContext(Context);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    setContext({
        ...context,
        server: event.target.server.value,
        leftPlayer: event.target.left.value
    })

    navigate("/match")
  }

  return (
    <>
      <h1>enter choices</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <p>server</p>
          <input
            type="radio"
            id="PlayerA"
            name="server"
            value={context.playerA}
          />
          <label htmlFor="playerA">{context.playerA}</label>
          <input
            type="radio"
            id="PlayerB"
            name="server"
            value={context.playerB}
          />
          <label htmlFor="playerB">{context.playerB}</label>
        </div>
        <div>
          <p>Left side of the Court</p>
          <input
            type="radio"
            id="PlayerA"
            name="left"
            value={context.playerA}
          />
          <label htmlFor="playerA">{context.playerA}</label>
          <input
            type="radio"
            id="PlayerB"
            name="left"
            value={context.playerB}
          />
          <label htmlFor="playerB">{context.playerB}</label>
        </div>
        <div>
            <button type="submit">Start Match</button>
        </div>
      </form>

    </>
  );
};

export default Choice;
