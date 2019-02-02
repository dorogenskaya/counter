import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Counter extends Component {

    renderTags() {
        if (this.props.tags.length === 0) return <p>"there are no tags"</p>;
        return <ul>{this.props.tags.map(tag => <li key ={tag} >{tag}</li>)}</ul>;

    };

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };


    render() {
        console.log('props', this.props);

        return (
        <React.Fragment>
            <span
                className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className='btn btn-secondary btn-sm'>Increment</button>
            <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className='btn btn-danger btn-sm m-1'>Delete</button>
            {this.renderTags()}
        </React.Fragment>
        );
    }
}

export default Counter;
