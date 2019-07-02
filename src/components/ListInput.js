import React, {Component} from "react" 

class ListInput extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ""
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    render() {
        // console.log(this.props)
        return (
            <>
                <input onChange={(event) => this.handleChange(event.target.value)} />
                {/* on the click o the button we run the function that we passed down and use the users input as a parameter*/}
                <button onClick={(event) => this.props.addTodo(this.state.userInput)}>Add Item</button>
            </>
        )
    }
}

export default ListInput