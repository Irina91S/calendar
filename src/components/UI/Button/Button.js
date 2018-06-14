import React, {Component} from 'react';

import classes from './Button.css';

class Button  extends Component {
	render() {
		return(
			this.props.isEditable ? 
			<button
				type="button"
				className={classes.Button} 
				onClick={this.props.editEvent}> 
				{this.props.children}
			</button>
			:
			<button
				type="button"
				className={classes.Button} 
				onClick={this.props.addEvent}> 
				{this.props.children}
			</button>

		);
	}
}

export default Button;