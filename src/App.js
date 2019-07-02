import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from "./components/ListItem"
import ListInput from "./components/ListInput"

class App extends Component {
  constructor() {
    super() 
    this.state = {
      todo: ["Get Milk","Eat", "Sleep"]
    }
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  // adds a item into the todo array
  addTodo(val) {
    this.setState({todo: [...this.state.todo, val]})
  }
  // removes item from array
  removeTodo(index) {
    let arr = this.state.todo
    arr.splice(index,1)

    this.setState({todo: arr})
  }



  render() {
    let displayTodos = this.state.todo.map((item, i) => {
      // passing down three props the item, its index, and the removeTodo function
      return <ListItem todo={item} removeTodo={this.removeTodo} index={i} key={i} />
    })

    return (
      <div className="App">
          <h1>My List</h1>
          {/* passing down the addTodo method through props */}
          <ListInput addTodo={this.addTodo}/>
            <ul>
              {displayTodos}
            </ul>
      </div>
    )
  }
}

export default App;
