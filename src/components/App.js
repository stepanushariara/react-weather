import React, {Component} from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList'

class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchBar/>
                <WeatherList/>
            </div>
        );
    }
}

export default App;
