import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateField } from '../../redux/store';

class Step2 extends Component {
    
    render() {
        return (
            <div>
                Add New Listing
                
                <form>
                    Image URL
                    <input 
                        type="text"
                        value={this.props.img}
                        onChange={(e) => this.props.updateField('img', e.target.value)} />
                    <Link to={'/wizard/step1'}>
                        <button>Previous Step</button>
                    </Link>
                    <Link to={'/wizard/step3'}>
                        <button>Next Step</button>
                    </Link>
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