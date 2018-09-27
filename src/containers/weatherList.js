import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/googleMaps';

class WeatherList extends Component {
    setWeather(data){
        const name = data.city.name;
        const temp = data.list.map(weather => weather.main.temp);
        const press = data.list.map(weather => weather.main.pressure);
        const humdt = data.list.map(weather => weather.main.humidity);
        const {lat, lon} = data.city.coord;

        return(
            <tr key={name}>
                <td><GoogleMaps lat={lat} lon={lon}/></td>
                <td><Chart data={temp} color="orange" units="K"/></td>
                <td><Chart data={press} color="green" units="hPa"/></td>
                <td><Chart data={humdt} color="blue" units="%"/></td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature(K)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.setWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);