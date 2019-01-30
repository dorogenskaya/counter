import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Counter extends Component {
    state = {
        count: 3,
        tags: ['tag1','tag2','tag3']
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>"there are no tags"</p>;
        return <ul>{this.state.tags.map(tag => <li key ={tag} >{tag}</li>)}</ul>;

    };

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    };

    handleIncrement = () => {
        this.setState ({count: this.state.count + 1})
    };

    render() {
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/*<button onClick={ () => {this.handleIncrement(product)}} className='btn btn-secondary btn-sm'>Increment</button>*/}
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>

            {this.renderTags()}
        </React.Fragment>
        );
    }
}

export default Counter;
