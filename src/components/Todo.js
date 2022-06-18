import React from "react";
import TodoForm from "./TodoForm";
import {IoMdRemoveCircleOutline} from "react-icons/io"
import { BiEdit} from 'react-icons/bi'

export default function Todo({ todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = React.useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }



    return todos.map((todo, index) => (
    <div className=
        {todo.isComplete ? "todo complete" :
            "todo"} key={index} >

        <div className="text" key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <IoMdRemoveCircleOutline 
                onClick={() => removeTodo(todo.id)}
                className="remove-icon"
            />
            <BiEdit
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className="edit-icon"
            />
        </div>
    </div>
    ))
     
} 