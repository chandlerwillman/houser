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
            <div>
                Dashboard
                <Link to={'/wizard/step1'}>
                    <button>Add New Property</button>
                </Link>

                {this.mapHouses()}

            </div>
        );
    }
}

export default Dashboard;