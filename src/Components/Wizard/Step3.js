import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateField, clearFields } from '../../redux/store';

class Step3 extends Component {
    
    render() {
        return (
            <div>
                Add New Listing
                
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    Monthly Mortgage Amount
                    <input 
                        type="text"
                        value={this.props.monthlyMortgage}
                        onChange={(e) => this.props.updateField('monthlyMortgage', e.target.value)} />
                    Desired Monthly Rent
                    <input 
                        type="text"
                        value={this.props.desiredRent}
                        onChange={(e) => this.props.updateField('desiredRent', e.target.value)} />
                    <Link to={'/wizard/step2'}>
                        <button>Previous Step</button>
                    </Link>
                    <button
                        type="submit"
                        >Complete</button>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        const { name, address, city, state, zip, img, monthlyMortgage, desiredRent } = this.props;

        axios.post('http://localhost:4000/api/houses', {
            name, address, city, state, zip, img, monthlyMortgage, desiredRent
        }).then(() => {
            this.props.clearFields();
            this.props.history.push('/');
        });
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        monthlyMortgage: state.monthlyMortgage,
        desiredRent: state.desiredRent
    }
}

export default connect(mapStateToProps,{ updateField, clearFields })(Step3);