import React, {Component} from 'react';


import Aux from '../hoc/Auxiliary/Auxiliary';
import Calendar from '../components/Calendar/Calendar';

class CallendarApp extends Component {

	render(){
 		return(
 			<Aux>
				<Calendar />
			</Aux>
		);
	}
} 
export default CallendarApp;