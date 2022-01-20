import React from "react";
import '../style/TodoListItem.scss';

interface TodoListItemProps{
    todo: Todo;
    toggleTodo: ToggleTodo;
    removeTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, removeTodo }) => {
    return (
        <div className="TodoListItem">
            <div>
                <input type="checkbox" className="form-check-input" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
            </div>
            <div className={"para" + (todo.complete ? " complete" : "")} contentEditable={true} suppressContentEditableWarning={true}>{todo.text}</div>
            <button onClick={() => removeTodo(todo)}>❌</button>
        </div>
    )
};