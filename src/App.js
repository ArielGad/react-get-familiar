import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        firstName: "Ariel",
        lastName: "Gad",
    };

    handleChange = (e) =>{
        this.setState({firstName: e.target.value});
    };

    handleSubmit = (e) => {
    //    prevents from the browser to refresh.
    //    since it is the natural behavior of the submit
        e.preventDefault();
        console.log("Form submitted with value " + this.state.firstName)
    };

    render(){
        return (
            <div>
                <h1>Hello, World!</h1>
                <p>My name is: {this.state.firstName}</p>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App;
