import React from 'react';

import classes from './Toolbar.css';
import Logo from '../Logo/Logo';

const Toolbar = ( props ) => (
	<header className={classes.Header}>
         <Logo className={classes.Logo}/>
    </header>
);

export default Toolbar;