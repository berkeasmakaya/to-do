function List({todos}){
    return(
        <div>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default List;