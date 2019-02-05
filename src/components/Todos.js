import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
	render(){
		return this.props.todo.map((x) => (
			<TodoItem key={ x.id } x={ x } 
			markComplete={ this.props.markComplete } 
			deleteTodo={ this.props.deleteTodo}/>
			));
	}
}

Todos.propTypes = {
	todo: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
}

export default Todos;