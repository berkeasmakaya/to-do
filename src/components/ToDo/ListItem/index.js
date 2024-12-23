function ListItem({todos, onDelete}){
    return(
        <div id="list-container">
            <ul>
                {todos.map((todo,index)=>(
                    <>
                        <li key={index}>
                            <div id="checkbox-div">
                                <input type="checkbox"  />
                                <span>{todo}</span>
                            </div>
                            
                            <button 
                                className="dlt-btn"
                                onClick={()=>onDelete(index)}
                            >
                                Sil
                            </button>
                        </li>
                        
                    </>
                    
                ))}
            </ul>
        </div>
    )
}

export default ListItem;