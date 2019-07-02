import React from "react"

function ListItem (props) {
    console.log(props)
    return(
        // props is used throughout this component 
        // the removeTodo function on the on click and passing in the index
        // that we get through props 
        // and we display the Todo Item on the page
        <li>
            {props.todo}
            <button onClick={(event) => props.removeTodo(props.index)}>Delete</button>
        </li>
    )
}

export default ListItem