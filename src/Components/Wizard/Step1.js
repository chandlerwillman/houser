import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateField } from '../../redux/store';

class Step1 extends Component {
    
    render() {
        return (
            <div>
                Add New Listing
                
                <form>
                    Property Name
                    <input 
                        type="text"
                        value={this.props.name}
                        onChange={(e) => this.props.updateField('name', e.target.value)} />
                    Address
                    <input 
                        type="text"
                        value={this.props.address}
                        onChange={(e) => this.props.updateField('address', e.target.value)} />
                    City
                    <input 
                        type="text"
                        value={this.props.city}
                        onChange={(e) => this.props.updateField('city', e.target.value)} />
                    State
                    <input 
                        type="text"
                        value={this.props.state}
                        onChange={(e) => this.props.updateField('state', e.target.value)} />
                    Zip
                    <input 
                        type="text"
                        value={this.props.zip}
                        onChange={(e) => this.props.updateField('zip', e.target.value)} />
                    <Link to={'/wizard/step2'}>
                        <button>Next Step</button>
                    </Link>
                </form>
            </div>
        );
    }


}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps,{ updateField })(Step1);