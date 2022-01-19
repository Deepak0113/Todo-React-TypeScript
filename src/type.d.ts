type Todo = {
    position: number,
    text: string,
    complete: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;