import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    return (
        <div>
            {props.todoItems.map(item => {
                <Todo
                    key={item.id}
                    item={item}
                    itemCompleted={props.itemCompleted}
                />
            })}
        </div>
    )
}

export default TodoList