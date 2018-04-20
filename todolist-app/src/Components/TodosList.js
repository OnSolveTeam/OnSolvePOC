// import _ from 'lodash'
import React from 'react'
import TodosListHeader from './todos-List-Header'
import TodosListItem from './todos-list-item';
export default class TodosList extends React.Component{
    // constructor(){
    //     super();       
    // }
    renderItems(){
        return(
        //    _.map(this.props.todos), (todo,index)=> <TodosListItem key={index} task={todo.task}/>
           this.props.todos.map((item,index) => <TodosListItem key={index}  title={item.Title} 
           date={item.DateandTime}/>)
        );
    }

    render(){    
    return(
        <div className="container">
        <table className="table table-striped">
        <TodosListHeader/>
        <tbody>
           {this.renderItems()}
            </tbody>
        </table> 
        </div>       
    );
}

}