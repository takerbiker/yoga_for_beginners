import React, { Component } from 'react';

class Poses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: "", 
            // image: "",
            // category: "",
            poses: []
        }
    }

    componentDidMount() {
        this.getPoses()
    }
    
    getPoses() {
        fetch('http://localhost:3000/poses')
            .then(response => response.json())
            .then(json => this.setState( { poses : json}))
        .catch(error => console.error(error))
        }



    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <h1>Poses</h1>
                {this.state.poses.map((pose) => {
                    return (
                        <div key={pose.id}>
                            <h3>{pose.name}</h3>
                            <p>{pose.category}</p>    
                            {/* <img src={pose.image} /> */}
                        </div>
                    
                    )
                })}
            </React.Fragment>
        )
   }
}

export default Poses;