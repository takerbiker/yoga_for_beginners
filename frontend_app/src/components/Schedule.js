import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Schedule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			schedule : []
		};
	}

	componentDidMount() {
		this.getSchedule();
	}

	getSchedule() {
		fetch('https://api.mindbodyonline.com/public/v6/class/classschedules?limit=100&offset=0', {
			method  : 'GET',
			headers : {
				'Content-Type'                : 'application/json',
				'API-Key'                     : 'f50b5ea43c1440b5af21be52f91ff903',
				SiteId                        : '-99',
				Authorization                 : '35fbccfe944c4d3fa97fe1fa31c9432120d41f87f46a4b62bab73c68b7a0b94d',
				'Access-Control-Allow-Origin' : '*'
			}
		})
			.then((response) => response.json())
			.then((json) => this.setState({ poses: json }))
			.catch((error) => console.error(error));
	}

	render() {
		console.log(this.state);
		return (
			<React.Fragment>
				<h1>Class Schedule</h1>

				<p>Class Schedule for customers to book</p>

				{/* <Privateclass /> */}
				<Link
					to={{
						pathname : '/home'
						// state: {
						//   poses: poses,
						// }
					}}
				>
					Home
				</Link>
			</React.Fragment>
		);
	}
}

export default Schedule;
