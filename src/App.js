import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        firstName: "Ariel",
        lastName: "Gad",
        fullName: function() {return this.firstName + " " + this.lastName}
    };

    handleCopy = this.handleCopy.bind(this);

    handleClick(eventObject){
        console.log("This is the event -> " + eventObject.target);
    };

    handleMouseOver = (e) => {
        console.log("This is the event mouse over that was hovered by: " + this.state.firstName);
    };

    handleCopy(e){
        console.log("Try being original for once " + this.state.firstName);
    };

    render(){
        return (
            <div>
                <h1>Hello, World!</h1>
                <p>My name is: {this.state.fullName()}</p>
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseOver={this.handleMouseOver}>Hover Me</button>
                <p onCopy={this.handleCopy}>What we think, we become</p>
            </div>
        )
    }
}

export default App;
