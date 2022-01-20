import React from "react";
import { TodoListItem } from "./TodoListItem";
import '../style/TodoList.scss'

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
    removeTodo: ToggleTodo;
}

export const TodoList:React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
    return (
        todos.length!==0 ?
        <div className="TodoList">
            {
                todos.map((item, key) => (
                    <TodoListItem key={key} todo={item} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
                ))
            }
        </div> :
        <div className="TodoList__NoList">ADD TODO</div>
    )
}