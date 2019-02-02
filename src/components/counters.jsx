import React, {Component} from 'react';
import Counter from './counter';
// import PropTypes from 'prop-types';

export default class Counters extends Component {

    render() {
        const {onReset, counters, onDelete, onIncrement, tags, onDecrement} = this.props;

        return (
            <div className='container m-2'>
                <button
                    onClick={onReset}
                    className='btn btn-secondary btn-sm m-1'>Reset</button>

                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                        tags={tags}
                        onDecrement={onDecrement}
                    />
                )}
                </div>
        );
    }
}
