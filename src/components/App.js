import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false, // To track if the ball should be rendered
            posi: 0, // To track the ball's position
            ballPosition: { left: "0px" } // CSS property to control the ball's position
        };
        this.renderBallOrButton = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    // Handles the button click event to start the game
    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    // Determines whether to render the start button or the ball
    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    // Handles the keydown event for moving the ball to the right
    handleKeyDown(event) {
        if (event.key === "ArrowRight" || event.keyCode === 39) {
            this.setState((prevState) => {
                const newPos = prevState.posi + 5;
                return {
                    posi: newPos,
                    ballPosition: { left: `${newPos}px` }
                };
            });
        }
    }

    // Adding the event listener when the component is mounted
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    // Cleaning up the event listener when the component is unmounted
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
