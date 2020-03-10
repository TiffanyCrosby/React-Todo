import React, { Component } from 'react'

class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    handleChanges = event => {
        this.setState({ item: event.target.value })
    }

    handleSubmit = event => {
        this.props.addItem(this.state.item)
        this.setState({ item: '' })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='item'
                        value={this.state.item}
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
                <br />
                <button className="clear-btn" onClick={this.props.clearTasks}>
                    Clear Completed Tasks
            </button>
            </div>
        )
    }

}

export default TodoForm