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
        ],
        tags:  ['tag1','tag2','tag3']
    };

    handleReset = () => {
        const counters = this.state.counters.filter(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters })
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters })
    };

    handleDelete = counterId =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className='btn btn-secondary btn-sm m-2'>Reset</button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete }
                        onIncrement={this.handleIncrement}
                        counter={counter}
                        tags={this.state.tags}
                        />
                )}
            </div>
        );
    }
}

// Counters.propTypes = {};

