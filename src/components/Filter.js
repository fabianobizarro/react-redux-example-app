import React, { Component } from 'react';
import { setFilter } from '../actions/FilterActions';
import { connect } from 'react-redux';

export class Filter extends Component {

    constructor({ props, dispatch }) {
        super(props);


        this.state = {
            filter: ''
        }

        this.dispatch = dispatch;
        this.onChange = this.onChange.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    onChange(e) {
        let filter = e.target.value;
        this.setState({ filter: filter });
        this.dispatch(setFilter(filter));
    }

    clearFilter() {
        this.setState({ filter: '' });
        this.dispatch(setFilter(''));
    }

    render() {
        return (
            <div className="field is-grouped" style={{ padding: '10px' }}>
                <p className="control is-expanded">
                    <input type="text" className="input" placeholder="Filter" value={this.state.filter} onChange={this.onChange} />
                </p>
                <p className="control">
                    <button className="button is-info" type="button" onClick={this.clearFilter}>Clear</button>
                </p>
            </div>
        );
    }


}

const FilterContainer = connect()(Filter);

export default FilterContainer;