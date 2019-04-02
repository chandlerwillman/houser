import React from 'react';

export default function House(props) {
    const { name, address, city, state, zip, id } = props.house;
    
    return (
        <div>
            <div>Property Name: {name}</div>
            <div>Address: {address}</div>
            <div>City: {city}</div>
            <div>State: {state}</div>
            <div>Zip: {zip}</div>
            <button onClick={() => props.deleteHouse(id)}>Delete</button>
        </div>
    );
}