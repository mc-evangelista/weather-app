import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
//Register Reducer as the Application STATE key

const rootReducer = combineReducers({
  /*state: (state = {}) => state*/
  /* STATE:REDUCER */
  weather: WeatherReducer
});

export default rootReducer;
