import React,{Component} from 'react'
import './create-todo.css'
import Calender from './Calender'
import DatePicker from 'react-datepicker';


export default class CreateTodo extends Component{
    render(){
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
            
            <div className="container">
            <div className="row">
            <div className="col-md-2">  
            <label>Title :</label> 
            </div>
            <div className="col-md-2">   
                 
            <input type="text" placeholder="Title" ref="createInputOfTitle"/>    
            </div>
            <div className="col-md-2">  
            <label>Date :</label> 
            </div>            
            <div className="col-md-2">
            <Calender ref="createInputOfDate"/>
            
            </div>
            <div className="col-md-4">            
            <button className="btn btn-primary btn btn-sm" id="submitButton">Create</button>
            </div>
            </div>
            </div>
            
            </form>
        );
    }

    handleCreate(event){
event.preventDefault();
this.props.createTask(this.refs.createInputOfTitle.value,"12/12/1001");
    }
}