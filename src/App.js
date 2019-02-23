import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        firstName: "Ariel",
        lastName: "Gad",
        fullName: function() {return this.firstName + " " + this.lastName}
    }
    render(){
        return (
            <div>
                <h1>Hello, World!</h1>
                <p>My name is: {this.state.fullName()}</p>
            </div>
        )
    }
}

export default App;
