import axios from 'axios';

const API_KEY = 'f4e5c41a968b713936d7831ca66e6203';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const endpoint = `${API_URL}q=${city}&appid=${API_KEY}`;
    const request = axios.get(endpoint);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

