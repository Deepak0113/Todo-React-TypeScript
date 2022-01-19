import React, { useState } from 'react';
import './App.css';
import { AddTodoForm } from './component/AddTodoForm';
import { TodoList } from './component/TodoList';

const initialTodos: Array<Todo> = []

const sortArrayTodo = (arr: Array<Todo>) => {
    let i=0,j=0;

    while(j<arr.length && i<arr.length){
        if(arr[i].complete && !arr[j].complete)
            [arr[i], arr[j]] = [arr[j], arr[i]]
        if(!arr[i].complete) i+=1;
        if(arr[j].complete) j+=1;
        if(i>j) j=i;
    }

    return arr;
}

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo:ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map(todo => {
            if(todo === selectedTodo){
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo;
        })
        setTodos(sortArrayTodo(newTodos));
    }

    const addTodo: AddTodo = (newTodo) => {
        newTodo.trim() !== "" &&
        setTodos(
            sortArrayTodo([
                ...todos,
                {
                    position: todos.length,
                    text: newTodo,
                    complete: false
                }
            ])
        )
    }

    return (
        <div className="App">
            <div className="todoContainer">
                <TodoList todos={todos} toggleTodo={toggleTodo} />
                <AddTodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

export default App;
