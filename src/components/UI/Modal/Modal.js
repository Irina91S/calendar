import React, {Component} from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Form from '../../../containers/EventForm';


class Modal  extends Component {
	render() {
		return(
			<Aux>
				<div className={classes.Backdrop} onClick={this.props.backdropClickHandler}></div>
					<div className={classes.Modal}>
						<Form {...this.props}
							addEvent={this.props.addEvent}
							changeEventFormState = {this.props.changeEventFormState}
							backdropClickHandler = {this.props.backdropClickHandler}
							editCalendarEvent = {this.props.editCalendarEvent}
							setEventsToLocalStorage = {this.props.setEventsToLocalStorage}
							changed={this.inputChangedHandler}/>
					</div>
			</Aux>
		);
	}
}

export default Modal;