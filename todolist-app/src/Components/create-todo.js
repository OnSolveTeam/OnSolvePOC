import React,{Component} from 'react'


export default class CreateTodo extends Component{
    render(){
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
            
            <div className="container">
            
            <input type="text" placeholder="Title" ref="createInputOfTitle"/>         
            
            <input type="text" placeholder="Enter Date" ref="createInputOfDate"/>
            </div>
            <div className="container">
            <button className="btn btn-primary">Create</button>
            </div>
            
            </form>
        );
    }

    handleCreate(event){
event.preventdefault();
this.props.createTask(this.refs.createInput.value,this.refs.createInputOfDate.value);
    }
}