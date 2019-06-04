import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

import House from '../House/House';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        };
    }

    //lifecycle methods
    componentDidMount() {
        this.getHouses();
    }

    //methods
    getHouses = () => {
        axios.get('/api/houses')
            .then(response => {
                this.setState({
                    houses: response.data,
                });
            });
    };
    
    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`)
            .then(response => {
                this.getHouses();
            });
    };
    
    mapHouses = () => {
        return this.state.houses.map((house, index) => {
            return(
                <House
                    house={house}
                    key={index} 
                    deleteHouse={this.deleteHouse}
                />
            )
        });
    }

    //render
    render() {
        return (
            <div className="dashboard">
                <div className="columns">
                    <h1 className="column">Dashboard</h1>
                    <Link className="column" align="right" to={'/wizard/step1'}>
                        <button className="button" >Add New Property</button>
                    </Link>
                </div>
                <hr />
                <h2>Home Listings</h2>
                {this.mapHouses()}
            </div>
                
        );
    }
}

export default Dashboard;