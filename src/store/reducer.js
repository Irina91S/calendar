import * as actionTypes from './actions/actions';

const initialState = {
	calendarEvent: {},
	latestDate: {},
	eventForm:{
        type: {
          elementType:'select',
          elementConfig: {
            options: [
            {value: 'Call', displayValue:'Call' },
            {value: 'Meeting', displayValue:'Meeting'},
            {value: 'Appointment', displayValue:'Appointment'},
            {value: 'Holliday', displayValue:'Holliday'}
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
        description:{
          elementType:'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Event description'
          },
          value: ''
        } 
      }
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.ADDING_EVENT:
			return{
				...state,
			}
		case actionTypes.EDITING_EVENT:
			return{
				...state,
			}
		default:
			return state;
	}
};

export default reducer; 