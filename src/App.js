import React, { Component } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

let toDoItems = [
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false

  },

  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Finish Project',
    id: 1528817070843,
    completed: false
  },

  {
    task: 'Acrobatics',
    id: 15288489657265,
    completed: false
  },

  {
    task: 'Dinner',
    id: 152889536749854,
    completed: false
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = { toDoItems }
  }

  clearCompleted = () => {
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => {
        if (item.completed) {
          return null
        } return item
      })
    })
  }

  toggleCompleted = clickedItemId => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
        if (item.id === clickedItemId) {
          return { ...item, completed: !item.completed }
        } return item
      })
    })
  }

  addToDo = itemName => {
    this.setState({
      toDoItems: [...this.state.toDoItems, {
        task: itemName,
        id: Date.now(),
        completed: false
      }]
    });
  };



  render() {
    return (
      <div className='body'>
        <h1>To Do List:</h1>
        <br />
        <TodoForm addToDo={this.addToDo} />
        <br />
        <TodoList toDoItems={this.state.toDoItems} clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} />
      </div>
    )
  }
}

export default App