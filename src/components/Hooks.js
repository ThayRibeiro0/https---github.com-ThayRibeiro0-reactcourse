import { useState, useEffect} from 'react'

const Hooks = () => {

    let age = 30
    const [newAge, setNewAge] = useState(40)

    const changeage = () => {
        age = 31
        console.log(age)
    }

    const changeNewAge = () => {
        setNewAge(45)
    }

    useEffect(() => {
        console.log("test2")
    })

    return (
        <div>
            <p>Age: {age}</p>
            <button onClick={changeage}>Change age</button>
            <p>Age: {newAge}</p>
            <button onClick={changeNewAge}>Change new age</button>
        </div>
    )
}

export default Hooks