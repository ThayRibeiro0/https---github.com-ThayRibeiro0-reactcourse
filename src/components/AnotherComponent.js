const AnotherComponent = () => {
    const handleClick = () =>{
        console.log("Button on")
    }

    return (
        <div>
            <p>Second Line</p>
            <button onClick={handleClick}>Click event</button>
            <hr/>
            <button onClick={() => console.log("text")}>Event in the Element</button>
        </div>
    )
}

export default AnotherComponent