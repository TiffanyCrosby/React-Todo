import React, { Component } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const toDoItems = [
  {
    id: 1528817084358,
    task: 'Bake Cookies',
    completed: false

  },

  {
    id: 1528817077286,
    task: 'Organize Garage',
    completed: false
  },

  {
    id: 1528817070843,
    task: 'Finish Project',
    completed: false
  },

  {
    id: 15288489657265,
    task: 'Acrobatics',
    completed: false
  },

  {
    id: 152889536749854,
    task: 'Dinner',
    completed: false
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      toDoItems,
      task: ''
    }
  }

  clearTasks = toDoItems.filter(event => {
    return event.done === true
  })

  itemCompleted = clickedItemId => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
        if (item.id === clickedItemId) {
          return { ...item, completed: !item.completed }
        } else { return item }
      })
    })
  }

  addToDo = itemName => {
    this.setState({
      toDoItems: [...this.state.toDoItems, {
        id: new Date(),
        task: itemName,
        completed: false
      }]
    });
  };



  render() {
    return (
      <div>
        <header>To Do List:</header>
        <TodoForm addToDo={this.addToDo} clearTasks={this.clearTasks} />
        <TodoList toDoItems={this.state.toDoItems} itemCompleted={this.itemCompleted} />
      </div>
    )
  }
}

export default App