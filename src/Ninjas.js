import React from 'react';

const Ninjas = (props) => {
    // Below is if statement conditioanl

    // // ninjas is a list of objects
    // const { ninjas } = props;
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20){
    //         return(
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //                 <br/>
    //             </div>
    //         )
    //     }
    // return null
    //
    // })


    // ternary operators
    const { ninjas } = props;
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <br/>
        </div>) : null
    })

    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas

