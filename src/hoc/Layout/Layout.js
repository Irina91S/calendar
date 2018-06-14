import React from 'react';

import classes from './Layout.css';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Toolbar/Toolbar';
import CallendarApp from '../../containers/CallendarApp';

const layout = ( props ) => (
			<Aux>
				<Toolbar />
				<CallendarApp className={classes.Layout}>
					{props.children}
				</CallendarApp>
			</Aux>
);

export default layout;