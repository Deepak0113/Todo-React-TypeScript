import React from "react";
import '../style/TodoListItem.scss';

interface TodoListItemProps{
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <div className={"TodoListItem" + (todo.complete ? " complete" : "")}>
            <input type="checkbox" className="form-check-input" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
            <p>{todo.text}</p>
        </div>
    );
};