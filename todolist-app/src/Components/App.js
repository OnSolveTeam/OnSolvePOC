import React, { Component } from 'react';
import TodosList from './TodosList'
import CreateTodo from './create-todo'


const todos=[
  {
    Title: 'Make React Tutorial',
    DateandTime:'hghh'
  },
  {
    Title:'Lunch',
    DateandTime:'new Date()'
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
      <h1>React TODOS App</h1>
      <TodosList todos={this.state.todos}/>
    </div>  
  );
}
createTask(title,dateandTime){
this.state.todos.push({
  title,
  dateandTime
});
this.setState({
 todos:  this.state.todos
});
}

}
export default App;