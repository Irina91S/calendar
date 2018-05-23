import React, { Component } from 'react';
import $ from 'jquery';
import 'fullcalendar';

import classes from './Calendar.css';
import '../../assets/themes/bootstrap.css'



class Calendar extends Component {
  constructor(props) {
    super(props);

    this.instance = 'calendar' + Math.floor(Math.random() * 100);
  }

  componentDidMount() {
    $('.' + this.instance).fullCalendar({
    	defaultView: 'month',
  		height: 650,
  		theme: true,    
          themeSystem:'bootstrap4',
  		header: {
  			left:   'title',
  			center: '',
  			right:  'today, prev,next'
  		},
  		bootstrapFontAwesome:{
  			prev: 'fa-chevron-left',
    			next: 'fa-chevron-right',
  		}
    })
  }

  render(){
    return(
      <div className={classes.Calendar + ' ' + this.instance}></div>
    );
  }

}
export default Calendar;