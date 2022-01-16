import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Context from "../context/context"

const NewMatch = () => {

    const { context, setContext } = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        setContext ({
            playerA: event.target.playerA.value,
            playerB: event.target.playerB.value,
            sets: parseInt(event.target.sets.value,10)
        })
        
        navigate("/choice")
    }

    return (
        <>
            <h1>New Match</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Player A" name="playerA"/>
                    <span>vs.</span>
                    <input type="text" placeholder="Player B" name="playerB"/>
                </div>

                <div>
                    <span>Sets</span>
                    <input type="radio" id="sets1" name="sets" value={1} defaultChecked/>
                    <label htmlFor="sets1">1</label>
                    <input type="radio" id="sets3" name="sets" value={3} />
                    <label htmlFor="sets3">3</label>
                    <input type="radio" id="sets5" name="sets" value={5} />
                    <label htmlFor="sets5">5</label>
                </div>
                <div>
                    <button type="submit">Continue</button>
                </div>
            </form>
        </>
    )
}

export default NewMatch
