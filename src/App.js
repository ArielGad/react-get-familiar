import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
    render(){
        return (
            <div>
                <h1>Hello, World!</h1>
                <p>Welcome to my React mini project</p>
                <Ninjas name="Ariel" age="32" belt="Black"/>
            </div>
        )
    }
}

export default App;
