import React from 'react';

export default function House(props) {
    return (
        <div>
            <div>Property Name: {props.house.name}</div>
            <div>Address: {props.house.address}</div>
            <div>City: {props.house.city}</div>
            <div>State: {props.house.state}</div>
            <div>Zip: {props.house.zip}</div>
            <button>Delete</button>

        </div>
    );
}