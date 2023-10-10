const AnotherComponent = () => {
    const handleClick = () =>{
        console.log("Button on")
    }

    return (
        <div>
            <p>Second Line</p>
            <button onClick={handleClick}>Click event</button>
        </div>
    )
}

export default AnotherComponent