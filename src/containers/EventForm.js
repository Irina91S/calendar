import React, {Component} from 'react';

import Input from '../components/UI/Inputs/AddEvent/AddEvent';

class Form extends Component {

	state = {
		eventForm:{
			type: {
				elementType:'select',
				elementConfig: {
					options: [
						{value: 'call', displayValue:'Call' },
						{value: 'meeting', displayValue:'Meeting'},
						{value: 'appointment', displayValue:'Appointment'},
						{value: 'holliday', displayValue:'Holliday'}
					]
				},
				value: ''
			},

			title: {
				elementType:'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Event title'
				},
				value: ''
			},

			duration: {
				elementType:'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Event duration'
				},
				value: ''
			},

			description:{
				elementType:'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Event description'
				},
				value: ''
			} 
		}
	}

	addingEventHandler = (event) => {
		event.preventDefault();

		const formData = {};
		for (let formElementIdentifier in this.state.eventForm){
			formData[formElementIdentifier] = this.state.eventForm[formElementIdentifier].value;
		}
	}

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedEventForm = {
			...this.state.eventForm,
		};

		const updatedFormElement = {
			...updatedEventForm[inputIdentifier]
		};

		updatedFormElement.value= event.target.value;
		updatedEventForm[inputIdentifier] = updatedFormElement;
		this.setState({ eventForm: updatedEventForm})
	}

	render(){

		const formElementsArray = [] ;
		for( let key in this.state.eventForm){
			formElementsArray.push({
				id: key,
				config: this.state.eventForm[key]
			});
		}	
	
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
			</form>
		)

		return(
			<div>
				{form}
			</div>
		);
	}
} 
export default Form;