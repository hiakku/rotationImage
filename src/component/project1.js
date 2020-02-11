import React from 'react';
import build from './build.jpg';
export default class ImageRotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            rotation: 0,
            count: ''
        }
    }
    rotationClockwise = (e) => {
        e.preventDefault();
        let newRotation = this.state.rotation + 90;
        if (newRotation >= 360) {
            newRotation = 0;
        }
        this.setState ({
            rotation: newRotation*this.state.count
        })
    }
    myChangeHandler= (event) => {
        this.setState({count: event.target.value});
      }

    render() {
        const { rotation } = this.state;
        return (
            <div>
                <h1>Rotate Picture:</h1>
                <img src={build} className="App-logo" alt="cake" style={{transform: `rotate(${rotation}deg)`}} /><br/>
                <label htmlFor="counting">Select the number of rotation:</label>
                <input type="number" name="counting" id="counting" onChange={this.myChangeHandler}/><button type="button" name="submit" id="submit" onClick={this.rotationClockwise}>Submit</button>
            </div>
        )
    }
}
