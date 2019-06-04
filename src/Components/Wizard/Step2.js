import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateField } from '../../redux/store';

class Step2 extends Component {
    
    render() {
        return (
            <div>
                <form>
                    <div className="field">
                    <label className="label">Image URL</label>
                    <input 
                        type="text"
                        value={this.props.img}
                        onChange={(e) => this.props.updateField('img', e.target.value)} />
                    </div>
                    <div className="wizard-footer columns">
                        <Link className="column" align="left" to={'/wizard/step1'}>
                            <button className="button">Previous Step</button>
                        </Link>
                        <Link className="column" align="right" to={'/wizard/step3'}>
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
        img: state.img
    }
}

export default connect(mapStateToProps,{ updateField })(Step2);