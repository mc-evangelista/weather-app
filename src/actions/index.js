import axios from 'axios';

const API_KEY = '3790905ebcbfa2a3bd7cc757d2fe2c93';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

//shared between actionCreator and reducer
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Ajax Requests with Axios
//Aplication State - weather data API
//to be used as props function in Container

// /actions/index.js
export function fetchWeather(cityName){ //ActionCreator
    const country = 'us';
    const url = `${ROOT_URL}&q=${cityName},${country}`;
    //Ajax request from browser with AXIOS(axios js reference=>github.com/mzabriskie/axios) 
    const promiseRequest = axios.get(url);

    //console.log('ActionCreator Request: ',promiseRequest);

    //Action
    return {
        type: FETCH_WEATHER,
        payload: promiseRequest //(axios.get(url) )
    }
    //payload keyword with redux-promise(clean up code async)
}


