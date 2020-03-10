import React from 'react'

function Todo(props) {
    return (
        <div onClick={() => props.itemCompleted(props.item.id)}>
            {props.item.item}
        </div>
    )
}

export default Todo

/*This is what each of my todo items will actually look like when redered to the screen */
