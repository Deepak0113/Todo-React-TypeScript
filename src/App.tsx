import React, { useState } from 'react';
import './App.css';
import { AddTodoForm } from './component/AddTodoForm';
import { TodoList } from './component/TodoList';

const initialTodos: Array<Todo> = [
    {position: 0, text: "Walk the dog", complete: true},
    {position: 1, text: "Write app", complete: false},
    {position: 2, text: "100 push ups", complete: true},
    {position: 3, text: "10km run", complete: false},
]

const sortArrayTodo = (arr: Array<Todo>) => {
    
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
        setTodos(newTodos);
        console.log(newTodos);
    }

    const addTodo: AddTodo = (newTodo) => {
        newTodo.trim() !== "" &&
        setTodos([...todos, {position: todos.length, text: newTodo, complete: false}])
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
