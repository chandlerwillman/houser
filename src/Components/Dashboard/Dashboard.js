import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/houses')
            .then(response => {
                this.setState({
                    houses: response.data,
                });
            });
    }

    getHouses = () => {
        return this.state.houses.map((house, index) => {
            return(
                <House
                    house={house}
                    key={index} 
                />
            )
        });
    }
    
    render() {
        return (
            <div>
                Dashboard
                <Link to={'/wizard'}>
                    <button>Add New Property</button>
                </Link>

                {this.getHouses()}

            </div>
        );
    }
}

export default Dashboard;