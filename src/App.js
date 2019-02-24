import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

    state = {
        ninjas: [
            {name: "Ariel", age: 32, belt: "black", id:1},
            {name: "Foo", age: 20, belt: "brown", id:2},
            {name: "Bar", age: 27, belt: "blue", id:3},
        ]
    }

    addNinja = (ninjaObj) => {
        ninjaObj.id = Math.random();
        // let ninjasUpdated = [...this.state.ninjas, ninjaObj]
        let ninjasUpdated = this.state.ninjas.slice().concat(ninjaObj)
        this.setState({
            ninjas: ninjasUpdated
        })
    }

    deleteNinja = (id) => {

        // const newNinjaArray = []
        // this.state.ninjas.forEach(ninjaObj => {
        //     if (ninjaObj.id !== id){
        //         newNinjaArray.push(ninjaObj);
        //     }
        // })
        // this.setState({ninjas:newNinjaArray});


        // filter is non destructive command
        // it will return a new array
        let newNinjaArray = this.state.ninjas.filter(ninjaObj => {
            return ninjaObj.id !== id
        })
        this.setState({ninjas:newNinjaArray});
    }

    render(){
        return (
            <div>
                <h1>Hello, World!</h1>
                <p>Welcome to my React mini project</p>
                <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
                <AddNinja addNinja={this.addNinja}/>
            </div>
        )
    }
}

export default App;
