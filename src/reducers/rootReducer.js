//Le root reducer comme on l'a dit dans les cours combine les reducers grâce à la méthode combineReducers de redux
import { combineReducers } from "redux";
import { weather } from './reducer_weather'

const reducers = {
  weather: weather
}

const rootReducer = combineReducers(reducers)

export default rootReducer