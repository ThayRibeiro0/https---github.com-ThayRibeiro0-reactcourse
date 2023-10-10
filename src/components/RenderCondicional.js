const RenderCondicional = ({ x, y }) => {
    //if I only want one props I put props above the (props) and to destructure delete the props name above ({ x, y }) and in RenderCondicional the value x={5} y={10}
    //using props it'll need the value that will be working in the app.js the same way like with the const
    // const x = 6

    return <div> 
        {/* true or false */}
        {/* {props.x > 5 && <p>x it's bigger than 5</p>}  */}
        {x > 5 && <p>x it's bigger than 5</p>} 
        {x < 5 && <p>x it's little than 5</p>} 
        {x === 5 && <p>x it's equal than 5</p>}  

        {/* if and else */}
        {/* {props.x > 5 ? <p>x it's a high number</p> : <p>x it's a low number</p>} */}
        {x > 5 ? <p>x it's a high number</p> : <p>x it's a low number</p>}
        <p>The y value it's: {y} </p>
    </div>
}

export default RenderCondicional