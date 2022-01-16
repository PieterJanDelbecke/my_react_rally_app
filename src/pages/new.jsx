const NewMatch = () => {

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("form submitted")
        console.log("PlayerA",event.target.playerA.value)
        console.log("PlayerB",event.target.playerB.value)
        console.log("sets",event.target.sets.value)

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
