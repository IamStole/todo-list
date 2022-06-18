import {useEffect, useRef, useState} from "react"

export default function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value :
        "")

    const focusRef = useRef(null)

    useEffect(() => {
        focusRef.current.focus()
    })
    const handlleChange = (e) => {
        setInput(e.target.value)
    }

    const handlleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random () * 10000),
            text: input
        })

        setInput('')
    }
    return (
        <form className="form"
         onSubmit={handlleSubmit}>
           {props.edit ? (
            <>
                 <input 
            type="text"
            placeholder="Update todo"
            value={input}
            name="text"
            onChange={handlleChange}
            ref={focusRef}
            className="update"
            />
            <button className="update-btn">Update</button>
            </> 
           ) : 
           (<> <input 
            type="text"
            className="add"
            placeholder="Add a todo"
            value={input}
            name="text"
            onChange={handlleChange}
            ref={focusRef}
            
            />
            <button className="add-btn">Add</button></>)}
        </form>
    )
}