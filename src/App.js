import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render(){
        return (
            <div>
                <h1>Hello, World!</h1>
                <p>Random number: { Math.random() * 100 }</p>
            </div>
        )
    }
}

export default App;