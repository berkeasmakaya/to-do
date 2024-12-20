import { useState } from "react";
import Input from "./Input";
import List from "./List";
import {} from './style.css'

function ToDo() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // Yeni todo'yu listeye ekle
    };

    return(
        <div id="container">
            <h1>To Do</h1>
            <Input onAddToDo={handleAddTodo}/>
            <List todos={todos}/>
        </div>
    )
}

export default ToDo;