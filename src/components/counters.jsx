import React, {Component} from 'react';
import Counter from './counter';
// import PropTypes from 'prop-types';

export default class Counters extends Component {
    state = {
        counters: [
            {id: 1, value:4},
            {id: 2, value:4},
            {id: 3, value:4},
            {id: 4, value:4 }
        ]
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value}>
                </Counter>)}

            </div>
        );
    }
}

// Counters.propTypes = {};

