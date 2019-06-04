import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard.css';

import { clearFields } from '../../redux/store';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class Wizard extends Component {
    
    render() {
        return (
            <div className="wizard">

                <div className="columns">
                    <h1 className="column">Add New Listing</h1>
                    <Link className="column" align="right" to={'/'}>
                        <button className="button" onClick={(e) => {this.props.clearFields()}}>Cancel</button>
                    </Link> 
                </div>
                <div className="wizard-form"> 
                    <Route path="/wizard/step1" component={Step1} />
                    <Route path="/wizard/step2" component={Step2} />
                    <Route path="/wizard/step3" component={Step3} />
                </div>
            </div>
        );
    }
}

export default connect(null,{ clearFields })(Wizard);