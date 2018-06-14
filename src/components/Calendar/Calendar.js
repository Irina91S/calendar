import React, { Component } from 'react';
import $ from 'jquery';
import 'fullcalendar';

import classes from './Calendar.css';
import '../../assets/themes/bootstrap.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../UI/Modal/Modal';



class Calendar extends Component {

  constructor(props) {
    super(props);
    this.instance = 'calendar';
    this.changeEventFormState = this.changeEventFormState.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
    this.editCalendarEvent = this.editCalendarEvent.bind(this);
    this.setEventsToLocalStorage = this.setEventsToLocalStorage.bind(this);

    this.state = {
      isModalOpen: false,
      isEditable: false,
      calendarLoaded: false,
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
    }
  }

  changeEventFormState(childState) {
    this.setState({eventForm: childState});
  }

  dayClickHandler(date) {
    this.setState({isModalOpen: true, isEditable: false, latestDate: date});
  }

  resetForm() {
    let eventForm = {...this.state.eventForm};

    eventForm.title.value = '';
    eventForm.type.value = '';
    eventForm.description.value = '';

    this.setState({eventForm});
  }

  backdropClickHandler() {
    this.resetForm();
    this.setState({isModalOpen: false});
  }

  eventClickHandler(event){
    let eventForm = {...this.state.eventForm};
    let titleType = event.title.split(' - ');


    eventForm.title.value = titleType[0];
    eventForm.type.value = titleType[1];
    eventForm.description.value = event.description;

    this.setState({isModalOpen: true, isEditable: true, eventForm, calendarEvent: event})
  }

  editCalendarEvent(){

      let event = {...this.state.calendarEvent};
      let fullEvent = $('.' + this.instance).fullCalendar('clientEvents', event._id)[0];
      let eventForm = {...this.state.eventForm};

      fullEvent.title = eventForm.title.value + ' - ' + eventForm.type.value;
      fullEvent.description = eventForm.description.value;

      $('.' + this.instance).fullCalendar('updateEvent', fullEvent);
      console.log(fullEvent)

      this.backdropClickHandler();
  }

  setEventsToLocalStorage(){
    let existingEvents = $('.calendar').fullCalendar('clientEvents');
    for (let i = 0; i < existingEvents.length; i++) {
        delete existingEvents[i].source
      }
    localStorage.setItem("existingEvents", JSON.stringify(existingEvents));
  }

  componentDidMount() {
    var _this = this;

    $('.' + this.instance).fullCalendar({
      height: 650,
      theme: true,    
      themeSystem:'bootstrap4',
      header: {
        left:   'month, agendaWeek,agendaDay',
        center: '',
        right:  'today, prev,next'
      },
      bootstrapFontAwesome:{
        prev: 'fa-chevron-left',
        next: 'fa-chevron-right'
      },
      eventColor: '#378006', 
      dayClick: function(date){
        _this.dayClickHandler(date);
      },
      eventClick: (event) => {
        _this.eventClickHandler(event) 
      },
      events: JSON.parse(localStorage.getItem("existingEvents"))
    });
  }


  render() {
    return(
      <Aux>
        {this.state.isModalOpen ? <Modal {...this.state} 
          changeEventFormState = {this.changeEventFormState} 
          backdropClickHandler = {this.backdropClickHandler}
          editCalendarEvent = {this.editCalendarEvent}
          openStatus={this.state.isModalOpen} 
          changed={this.inputChangedHandler}
          setEventsToLocalStorage={this.setEventsToLocalStorage}/> : null}
        <div className = {classes.Calendar + ' ' + this.instance}></div>
      </Aux>
    );
  }

}
export default Calendar;