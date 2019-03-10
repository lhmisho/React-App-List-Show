import React, { Component } from 'react'


class Book extends Component {

    state = {
        isEditable: false
    }

    changeKeyHandler = (event) => {
        if (event.key === 'Enter') {
            this.setState({
                isEditable: false
            })
        }
    }

    render() {
        let output = this.state.isEditable ?
            <input
                onChange={(e) =>
                    this.props.changeHandler(e.target.value, this.props.book.id)}
                onKeyPress={this.changeKeyHandler}
                type='text'
                placeholder='Enter name'
                value={this.props.book.name} /> : <p>{this.props.book.name}</p>
        return (
            <li className="list-group-item d-flex">
                <span onClick={() => this.setState({ isEditable: true })}>{output}</span>
                <span className="ml-auto">
                    {this.props.book.price}
                    <div className='mx-4'>
                        <span
                            className='btn btn-primary btn-sm  mx-2'
                            onClick={() => this.setState({ isEditable: true })}>
                            <i class="fas fa-edit"></i>
                        </span>
                        <span className='btn btn-danger btn-sm' style={{ cursor: "pointer" }} onClick={() => this.props.deleteHandler(this.props.book.id)}><i className="fas fa-trash-alt"></i></span>
                    </div>
                </span>
            </li>
        )
    }
}

export default Book