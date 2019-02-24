import React from 'react';

const Ninjas = (props) => {
    // ninjas is a list of objects
    const { ninjas } = props;
    const { deleteNinja } =props;

    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20){
            return(
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                    <br/>
                </div>
            )
        }
    return null

    })


    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas

