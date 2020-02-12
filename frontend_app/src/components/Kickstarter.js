import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Kickstarter extends React.Component {
        // constructor(props) {
    // 	super(props);
    // 	this.state = {
    // 		currentUser : this.props.currentUser
    // 	};
    // }
    render() {
        return (
          <React.Fragment>
            
                <h1>Kickstarter pathway</h1>
                
                <p>Page to display after logged in</p>
                <p>Hi user, welcome to your....</p>

                {/* <Privateclass /> */}
                <Link
                        to={{
                          pathname: "/home",
                          // state: {
                          //   poses: poses,
                          // }
                        }}
                      >Home</Link>
          </React.Fragment>
        );
      }
    }


export default Kickstarter;

