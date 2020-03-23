import React, { Component } from 'react';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoInput extends Component {
    render() {
        // destruction 
        const {item,handleChange,handleSubmit,editItem} = this.props;
        return <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fa fa-book"/>
                        </div>
                    </div>
                    
                    <input type="text" 
                        className="form-control text-capitalize" 
                        placeholder="add todo item" 
                        value={item} 
                        onChange={handleChange}>
                    </input>
                </div>
                <button 
                //disbale button when there is no value(false) otherwise to not (true)
                //trying to deploy on netlify
                type="submit" disabled={item ? false : true} className={editItem ? "btn btn-block btn-success mt-3 text-uppercase" : "btn btn-block btn-primary mt-3 text-uppercase"}>
    {editItem ? "edit item":"add item"}</button>
            </form>
        </div>   
    }
}