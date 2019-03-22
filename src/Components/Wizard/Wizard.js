import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    };

    constructor() {
        super();

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
    };
    
    render() {
        return (
            <div>
                Add New Listing

                <Link to={'/'}>
                    <button>Cancel</button>
                </Link>

                <form>
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
                        onChange={this.handleZipcodeChange} />

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

    handleZipcodeChange(event) {
        this.setState({
            zipcode: event.target.value,
        });
    }
}

export default Wizard;