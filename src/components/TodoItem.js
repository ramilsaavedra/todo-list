import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
	style = () => {
		return {
			textDecoration: this.props.x.completed ? 'line-through' : 'none',
			padding: '10px',
			background: '#f0f0f0'
		}
	}
	render(){
		const { id, title } = this.props.x
		return (
			<div style={ this.style() }>
				<p>
					<input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> {''}
					{ title }
					<button onClick={ this.props.deleteTodo.bind(this, id)} style={ btnStyle }>X</button>
				</p>
			</div>	
		)
	}
}

const btnStyle = {
	padding: '5px 5px',
	color: 'white',
	background: 'red',
	border: 'none',
	borderRadius: '50%',
	float: 'right'
}

TodoItem.propTypes = {
	x: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem;