import React, { ChangeEvent, FormEvent, useState } from "react";
import "../style/AddTodoForm.scss"

interface AddTodoProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <form action="" className="AddTodoForm">
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    );
};