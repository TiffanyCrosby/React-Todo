import React from 'react'
import "./Todo.css"

function Todo(props) {
    return (
        <div className={`task${props.item.completed ? ' completed' : ''}`}
            onClick={() => props.toggleCompleted(props.item.id)}>
            <br />
            <label>
                <input
                    type='checkbox'
                    checked={props.item.completed}
                    onChange={() => props.toggleCompleted(props.item.id)}
                />{props.item.task}
            </label>
        </div>
    )
}

export default Todo

/*This is what each of my todo items will actually look like when redered to the screen */
