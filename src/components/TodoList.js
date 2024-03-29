import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        //destructuring
        const {items, clearList, handleDelete, handleEdit} = this.props;
            return (
                <div>
                <ul className="list-group mt-5">
                    <h3 className="text-capitalize text-center">todo list</h3>
                    {items.map(item => {
                        return(
                            <TodoItem key = {item.id} title={item.title} handleDelete={() =>handleDelete(item.id)} handleEdit={() =>handleEdit(item.id)}></TodoItem>
                        )
                    })}
                    <button type="button" className="btn btn-danger btn-block text-uppercase my-5" onClick={clearList}> clear list</button>
                </ul>
                <p><small><small>created by Richard Newton-Tussey</small></small></p>
                </div>
                );
        
}
}