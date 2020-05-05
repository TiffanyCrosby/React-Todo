import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.toDoItems.map(item => (
                < Todo
                    key={item.id}
                    item={item}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <br />
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList