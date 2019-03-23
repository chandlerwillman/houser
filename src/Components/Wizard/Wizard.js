import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: 0
    };

    constructor() {
        super();

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    render() {
        return (
            <div>
                Add New Listing

                <Link to={'/'}>
                    <button>Cancel</button>
                </Link>

                <form onSubmit={(event) => this.handleSubmit(event)}>
                    Property Name
                    <input 
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                    Address
                    <input 
                        type="text"
                        value={this.state.address}
                        onChange={this.handleAddressChange} />
                    City
                    <input 
                        type="text"
                        value={this.state.city}
                        onChange={this.handleCityChange} />
                    State
                    <input 
                        type="text"
                        value={this.state.state}
                        onChange={this.handleStateChange} />
                    Zip
                    <input 
                        type="text"
                        value={this.state.zipcode}
                        onChange={this.handleZipChange} />
                    <button
                        type="submit"
                        >Complete</button>
                </form>
            </div>
        );
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handleAddressChange(event) {
        this.setState({
            address: event.target.value,
        });
    }

    handleCityChange(event) {
        this.setState({
            city: event.target.value,
        });
    }

    handleStateChange(event) {
        this.setState({
            state: event.target.value,
        });
    }

    handleZipChange(event) {
        this.setState({
            zip: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { name, address, city, state, zip } = this.state;

        axios.post('http://localhost:4000/api/houses', {
            name, address, city, state, zip,
        }).then(() => {
            this.props.history.push('/');
        });
    }
}

export default Wizard;