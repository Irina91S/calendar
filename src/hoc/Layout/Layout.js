import React, {Component} from 'react';

import classes from './Layout.css';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Toolbar/Toolbar';
import CallendarApp from '../../containers/CallendarApp';


class Layout extends Component {

	render (){
		return (
			<Aux>
				<Toolbar />
				<CallendarApp className={classes.Layout}>
					{this.props.children}
				</CallendarApp>
			</Aux>
		);
	};
}

export default Layout;