import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Todo_row_child extends Component {

   constructor(props){
      super(props);
      this.deleteTodo = this.deleteTodo.bind(this);
   }

   deleteTodo(){
      axios.delete('http://localhost:4000/todos/delete/'+this.props.todo._id)
           .then(response => console.log('Successfully deleted'))
           .catch(err => console.log(err));
   }

   render() {
      return (
         <tr>
            <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>   
            <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
            <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
            <td>
               <Link className="btn btn-info" to={'/edit/'+this.props.todo._id}>Edit</Link>
               <button className="btn btn-danger ml-3" onClick={ this.deleteTodo }>Delete</button>
            </td>
         </tr>
      )
   }
}
