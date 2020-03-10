import React, { Component } from 'react'

class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    handleChanges = e => {
        this.setState({ item: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addToDo(this.state.item)
        this.setState({ item: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='inputField'
                        type='text'
                        name='item'
                        value={this.state.item}
                        placeholder='Add Your To Do Item'
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }

}

export default TodoForm