import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {keyword: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({keyword: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.keyword);
        this.setState({keyword: ''});
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input placeholder="Get five-days forcast in your cities" className="form-control" value={this.state.keyword} onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

