import React from "react";
import { TodoListItem } from "./TodoListItem";
import '../style/TodoList.scss'

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList:React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <div className="TodoList">
            {
                todos.map((item, key) => (
                    <TodoListItem key={key} todo={item} toggleTodo={toggleTodo} />
                ))
            }
        </div>
    )
}