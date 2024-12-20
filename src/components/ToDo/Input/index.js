import { useState } from "react";

function Input({onAddToDo}){
    const [todo, setTodo] = useState("");
    const onChangeTodo = (e) => {
        setTodo(e.target.value);
    }
    const addToDo = () => {
        if (todo.trim() === "") {
            alert("Please enter a valid todo!");
            return;
        }
        onAddToDo(todo);
        setTodo("");
    }
    return(
        <div>
            <input 
                name="todo" 
                placeholder="What needs to be done" 
                onChange={onChangeTodo}
                value={todo}
            />
            
            <button className="btn" onClick={addToDo}>Add</button>
        </div>
    )
}

export default Input;