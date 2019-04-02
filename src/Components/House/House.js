import React from 'react';

export default function House(props) {
    const { id, name, address, city, state, zip, img, monthly_mortgage, desired_rent } = props.house;
    
    return (
        <div>
            <img src={img} alt={name}/>
            <div>Property Name: {name}</div>
            <div>Address: {address}</div>
            <div>City: {city}</div>
            <div>State: {state}</div>
            <div>Zip: {zip}</div>
            <div>Monthly Mortgage: {monthly_mortgage}</div>
            <div>Desired Rent: {desired_rent}</div>
            <button onClick={() => props.deleteHouse(id)}>Delete</button>
        </div>
    );
}