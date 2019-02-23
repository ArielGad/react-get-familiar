import React from 'react';

const Ninjas = (props) => {
    // ninjas is a list of objects
    const { ninjas } = props;
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

export default Ninjas
