import AnotherComponent from "./AnotherComponent"

//coments js in components have differences but works like this!
function FirstComponent(){

    const name = "Thays"

    return (
        <div className="firstcomponent">
            
            <p>First line</p>
            {/* 
            COMENTS ON JSX
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" /> 
            */}  
            {2 + 2}
            {console.log("Javascript")}
            <p>Name: {name}</p>
            <AnotherComponent />

        </div>
    )
}

export default FirstComponent