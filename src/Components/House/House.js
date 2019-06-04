import React from 'react';
import './House.css';

export default function House(props) {
    const { id, name, address, city, state, zip, img, monthly_mortgage, desired_rent } = props.house;
    
    return (
        <div className="house columns">
            <div className="column is-one-third">
               <img src={img} alt={name}/>
            </div>
            <div className="column">
                <div>Property Name: {name}</div>
                <div>Address: {address}</div>
                <div>City: {city}</div>
                <div>State: {state}</div>
                <div>Zip: {zip}</div>
            </div>            
            <div className="column">
                <div>Monthly Mortgage: {monthly_mortgage}</div>
                <div>Desired Rent: {desired_rent}</div>
            </div>            
            <button className="delete" onClick={() => props.deleteHouse(id)}></button>
        </div>
    );
}