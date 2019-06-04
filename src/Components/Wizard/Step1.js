import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateField } from '../../redux/store';

class Step1 extends Component {
    
    render() {
        return (
            <div>
                <form>
                    <div className="field">
                        <label className="label">Property Name</label>
                        <input
                            type="text"
                            value={this.props.name}
                            onChange={(e) => this.props.updateField('name', e.target.value)} />
                    </div>
                    <div className="field">
                        <label className="label">Address</label>
                        <input 
                            type="text"
                            value={this.props.address}
                            onChange={(e) => this.props.updateField('address', e.target.value)} />
                    </div>
                    <div className="field is-horizontal">
                        <div className="field">
                            <label className="label">City</label>
                            <input 
                                type="text"
                                value={this.props.city}
                                onChange={(e) => this.props.updateField('city', e.target.value)} />
                        </div>
                        <div className="field">
                            <label className="label">State</label>
                            <input 
                                type="text"
                                value={this.props.state}
                                onChange={(e) => this.props.updateField('state', e.target.value)} />
                        </div>
                        <div className="field">
                            <label className="label">Zip</label>
                            <input 
                                type="text"
                                value={this.props.zip}
                                onChange={(e) => this.props.updateField('zip', e.target.value)} />
                        </div>
                    </div>
                    <div className="wizard-footer columns">
                        <Link className="column" align="right" to={'/wizard/step2'}>
                            <button className="button">Next Step</button>
                        </Link>
                    </div>
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