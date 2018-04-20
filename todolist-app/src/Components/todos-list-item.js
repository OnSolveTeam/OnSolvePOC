import React from 'react'
import './todos-list-item.css'

export default class TodosListItem  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isEditing:false
        };
    }
renderActioonsSections(){
    if(this.state.isEditing)
    {
        return(           
            <td>
            <button className="btn btn-warning btn btn-sm">Save</button>            
            <button className="btn btn-warning btn btn-sm" onClick={this.onCancelClick.bind(this)}>Cancel</button>        
            </td>            
        );
    }
    return( 
        <td>
        <button className="btn btn-danger btn btn-sm" onClick={this.onEditClick.bind(this)}>Edit</button>
        <button className="btn btn-danger btn btn-sm">Delete</button>
        </td>
    );
}

    render(){
        return(
            <tr>
            <td>{this.props.title}</td>
            <td>{this.props.date}</td>
           {this.renderActioonsSections()}
            </tr>
        );
    }
    onEditClick(){
        this.setState({
            isEditing: true
        }
        )
    };
    onCancelClick(){
    this.setState({
isEditing:false
    });
}
}