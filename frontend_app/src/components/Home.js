import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		currentUser : this.props.currentUser
	// 	};
	// }
	render() {
		return (
			<React.Fragment>
				<h1>Homepage</h1>

				<Link
					to={{
						pathname : '/poses'
						// state: {
						//   poses: poses,
						// }
					}}
				>
					Poses
				</Link>
			</React.Fragment>
		);
	}
}

export default Home;
