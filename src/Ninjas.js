import React, { Component } from 'react';

class Ninjas extends Component {
    render(){
        // destructuring assignment
        // const ninjas = this.props.ninjas IS SAME AS:
        // const { ninjas } = this.props

        // ninjas is a list of objects
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja => {
            return(
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <br/>
                </div>
            )
        })
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    }
}

export default Ninjas
