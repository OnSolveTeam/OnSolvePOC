import React, { Component } from 'react';
import TodosList from './TodosList'
import CreateTodo from './create-todo'

const todos=[
  {
    Title: 'Make React Tutorial',
    DateandTime:'20/04/2018'
  },
  {
    Title:'Lunch',
    DateandTime:'20/04/2018'
  }
];

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      todos
    }
  }
render(){
  return(
    <div>
      <CreateTodo createTask={(title,date) => this.createTask(title,date)}/>
      <TodosList todos={this.state.todos}/>
    </div>  
  );
}
createTask(Title,DateandTime){
this.state.todos.push({
  Title,
  DateandTime
});
this.setState({
 todos:  this.state.todos
});
}

}
export default App;