import React, {Component} from 'react';

import Aux from '../hoc/Auxiliary/Auxiliary';
import Calendar from '../components/Calendar/Calendar';
import Modal from '../components/UI/Modal/Modal';

class CallendarApp extends Component{

	render(){
 		return(
 			<Aux>
				<Modal/> 
				<Calendar />
			</Aux>
		);
	}
} 
export default CallendarApp;