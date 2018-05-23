import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import Form from '../../../containers/EventForm';
import Button from '../Button/Button';


const modal = ( props ) => (
	<Aux>
		<Backdrop/>	
		<div className={classes.Modal}>
			<Form />
			<Button ></Button>
		</div>
	</Aux>
);

export default modal;