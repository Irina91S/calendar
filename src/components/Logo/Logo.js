import React from 'react';


import img from '../../assets/images/img.png';
import classes from './Logo.css';

const Logo = ( props ) => (
	<div style={{height: props.height}}> 
		<img src={img} className={classes.Logo} alt="logo" />
	</div>
);

export default Logo;
