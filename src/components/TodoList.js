import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo"
import {GiCheckMark} from "react-icons/gi"


const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos') || '[]')

export default function TodoList() {
    const [todos, setTodos] = React.useState(todosFromLocalStorage )
    const addTodo = todo => {
        if (!todo.text) {
            return
        }
       const newTodos = [todo, ...todos];
        setTodos(newTodos)
    }
    const removeTodo = id => {
        const remove = [...todos].filter(todo => todo.id !== id)
        setTodos(remove)
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const updateTodo = (todoId, newTodo) => {
        if(!newTodo.text) {
            return
        }
        setTodos(prevTodo => prevTodo.map( item => item.id === todoId ? newTodo : item))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos)
    }
    return (
        <div className="container">
            <h1 className="to-do">To-Do<GiCheckMark/></h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo}
            removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}