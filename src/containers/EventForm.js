import React, {Component} from 'react';
import $ from 'jquery';
import 'fullcalendar';
//import { connect } from 'react-redux';

import Input from '../components/UI/Inputs/AddEvent/Input';
import Button from '../components/UI/Button/Button';
//import {addingEvent} from '../../store/actions/actions';

class Form extends Component {
	
	addEvent = (event) => {
		event.preventDefault();
		const formData = {};

		for (let formElementIdentifier in this.props.eventForm){
			formData[formElementIdentifier] = this.props.eventForm[formElementIdentifier].value;
		};

		if (this.props.latestDate.isValid()) {
			let eventType = this.props.eventForm.type.value;

			if(eventType === '') {
				eventType = 'Call';
			}

			$('.calendar').fullCalendar('renderEvent', {
				myType: eventType,
				title: this.props.eventForm.title.value + " - " + eventType,
				start: this.props.latestDate,
				description: this.props.eventForm.description.value,
				allDay: true,
			});
		}
		this.props.backdropClickHandler();
		this.props.setEventsToLocalStorage()
	}

	editEvent = (event) => {
		this.props.editCalendarEvent();
		this.props.setEventsToLocalStorage();
	}

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedEventForm = {
			...this.props.eventForm,
		};

		const updatedFormElement = {
			...updatedEventForm[inputIdentifier]
		};

		updatedFormElement.value= event.target.value;
		updatedEventForm[inputIdentifier] = updatedFormElement;

		this.props.changeEventFormState(updatedEventForm);
	}

	render(){
		const formElementsArray = [] ;
		for( let key in this.props.eventForm){
			formElementsArray.push({
				id: key,
				config: this.props.eventForm[key]
			});
		};	

		let form = (
			<form> 
				{formElementsArray.map( formElement => (
					<Input 
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
				))}
				{this.props.isEditable ? <Button {...this.props}
					editEvent={this.editEvent}
				    backdropClickHandler = {this.backdropClickHandler}>Edit Event
				</Button> : <Button {...this.props}
					addEvent={this.addEvent}
				    backdropClickHandler = {this.backdropClickHandler}>Add Event
				</Button>}
			</form>
		)

		return(
			<div>
				{form}
			</div>
			);
	}
} 

// const mapStateToProps = state => {
// 	return {
// 		evtForm: state.eventForm,
// 		lastestDate: state.lastestDate
// 	}
// };

// const mapDispatchToProps = dispatch =>{
// 	return {
// 		onAddEvent : () => dispatch(addingEvent())
// 	}
// };

export default Form;