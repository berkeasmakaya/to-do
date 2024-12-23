import ListItem from "../ListItem"

function List({todos, onDelete}){
    return(
        <div>
            <ListItem todos={todos} onDelete={onDelete}/>
        </div>
    )
}

export default List;