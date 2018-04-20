import React from 'react'

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
            <button className="btn btn-warning">Save</button>
            <button className="btn btn-warning" onClick={this.onCancelClick.bind(this)}>Cancel</button>
            </td>
        );
    }
    return( 
        <td>
        <button className="btn btn-success" onClick={this.onEditClick.bind(this)}>Edit</button>
        <button className="btn btn-success">Delete</button>
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