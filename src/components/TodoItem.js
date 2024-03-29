import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        // destructuring
        const {title, handleDelete, handleEdit} = this.props;

        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icons">
                   <button type="button" className="btn-primary" onClick={handleEdit}>Edit</button>
                   <button type="button" className="btn-danger"  onClick={handleDelete}>Delete</button>
                </div>
            </li>
        )
    }
}



// to spans after the todo-icons div
{/* <span className="mx-2 text-success" onClick={handleEdit}>
    <i className="fas fa-pen"></i>
</span>
<span className="mx-2 text-danger" onClick={handleDelete}>
    <i className="fas fa-trash"></i>
</span> */}