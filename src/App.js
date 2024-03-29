import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component{

state ={
  items:[
    // {id:1, title:'wake up'},
    // {id:2, title:'do your quiet time'},
    // {id:3, title:'excercise'},
    // {id:4, title:'Trade forex'},
    // {id:5, title:'develop apps'}
  ],
  id:uuidv4(),
  item:'',
  editItem:false,
};
// methods created here
handleChange=e => {
  this.setState({
    item: e.target.value
  })
};
handleSubmit= e => {
   e.preventDefault();
   const newItem = {
     id: this.state.id,
     title: this.state.item
   };
   const updateItems=[...this.state.items,newItem];
   this.setState({
     items:updateItems,
     item: "",
     id:uuidv4(),
     editItem:false
   });
 };
clearList=() => {
  this.setState({
    items:[]
  });
};
handleDelete=(id) => {
  const filteredItems = this.state.items.filter
  (item => item.id !==id);
  this.setState({
    items:filteredItems
  });

};
handleEdit=(id) => {
  const filteredItems = this.state.items.filter
  (item => item.id !==id);
  const selectedItem = this.state.items.find
  (item => item.id ===id);
  this.setState(
    {
      items: filteredItems,
      item: selectedItem.title,
      id:id,
      editItem:true
    }
  )
};

render(){
  console.log(this.state);
  return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
              todo input
            </h3>
              <TodoInput 
                item={this.state.item} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
                editItem={this.state.editItem}
              />
              <TodoList 
                items={this.state.items} 
                clearList={this.clearList} 
                handleEdit={this.handleEdit} 
                handleDelete={this.handleDelete}/>
             </div> 
        </div>
      </div>
  );
  }
}

export default App;
