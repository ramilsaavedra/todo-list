import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import axios from 'axios'

class App extends Component {
    state = {
    todo: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => 
    this.setState({todo: res.data}))
  }

  markComplete = (id) => {
    this.setState({todo: this.state.todo.map(x => {
      if (x.id === id){
          x.completed = !x.completed;
      }

      return x;
    })});  
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => 
    this.setState({todo: [...this.state.todo.filter(x => x.id !== id)]}))    
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
      })
    .then(res => (this.setState({todo: [...this.state.todo, res.data]})))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddToDo addTodo={this.addTodo}/>
                <Todos todo={this.state.todo} markComplete={ this.markComplete } deleteTodo={ this.deleteTodo }/>
              </React.Fragment>
              )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
