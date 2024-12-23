import { useState } from "react";
import Input from "./Input";
import {} from './style.css'
import ListItem from "./ListItem";
import List from "./List";

function ToDo() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]); // Yeni todo'yu listeye ekle
    };

    const handleDeleteTodo = (index)  => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    } 

    return(
        <div id="container">
            <h1>To Do</h1>
            <Input onAddToDo={handleAddTodo}/>
            <List todos={todos} onDelete = {handleDeleteTodo}/>
        </div>
    )
}

export default ToDo;