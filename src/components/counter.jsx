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
        let classes = "badge m-1 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };

    render() {
        return (
        <React.Fragment>
            <div className="row" >
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>

                <div className="col">
                    <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className='btn btn-secondary btn-sm '>+</button>

                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className='btn btn-secondary btn-sm m-1'
                        disabled={this.props.counter.value === 0 ? "disabled" : ""}
                    >-</button>

                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className='btn btn-danger btn-sm m-1'>X</button>
                </div>

                <div className="col-">
                    {this.renderTags()}
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Counter;
