import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Counter extends Component {
    state = {
        count: 3,
        imageUrl: 'https://picsum.photos/200'
    };

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    render() {
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
        );
    }


}

// Counter.propTypes = {};

export default Counter;
