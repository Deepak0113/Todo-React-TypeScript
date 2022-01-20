import React, { useState } from 'react';
import './App.css';
import { AddTodoForm } from './component/AddTodoForm';
import { TodoList } from './component/TodoList';

const initialTodos: Array<Todo> = JSON.parse(window.localStorage.getItem('todos') || '[]');

const sortArrayTodo = (arr: Array<Todo>) => {
    let i=0,j=0;

    while(j<arr.length && i<arr.length){
        if(arr[i].complete && !arr[j].complete)
            [arr[i], arr[j]] = [arr[j], arr[i]]
        if(!arr[i].complete) i+=1;
        if(arr[j].complete) j+=1;
        if(i>j) j=i;
    }

    i=0;
    while(i<arr.length){
        arr[i].position = i;
        i+=1;
    }

    return arr;
}

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const handleAUDTodos = (newTodos: Array<Todo>) => {
        const sortedArr = sortArrayTodo(newTodos);
        window.localStorage.setItem("todos", JSON.stringify(sortedArr));
        setTodos(sortedArr)
    }

    const toggleTodo: ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map(todo => {
            if(todo === selectedTodo){
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo;
        })
        handleAUDTodos(newTodos);
    }

    const removeTodo: ToggleTodo = (selectedTodo) => {
        const newArr = todos.filter(todo => todo!==selectedTodo);
        handleAUDTodos(newArr);
    }

    const addTodo: AddTodo = (newTodo) => {
        if(newTodo.trim() !== ""){
            const todoarr = [
                ...todos,
                {
                    position: todos.length,
                    text: newTodo,
                    complete: false
                }
            ]
            handleAUDTodos(todoarr);
        }
    }

    return (
        <div className="App">
            <div className="todoContainer">
                <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
                <AddTodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

export default App;
