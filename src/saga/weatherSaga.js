//Nous allons importer les fonctions call, put et takeEvery de redux-saga
import { call, put, takeEvery } from "redux-saga/effects";
//Ici on va appeler notre service de météo
import weatherService from './service/weatherService' //C'est ici qu'on écrira la logique d'appel à l'API

//On importe nos actions
import { getCurrentWeatherError, getCurrentWeatherSucces } from "../actions/actionCreators";
//On importe notre type 
import { GET_CURRENT_WEATHER_START } from "../actions/types";

function* getCurrentWeatherStart({ type, payload }) { //notre worker
  try {
    const response = yield call(weatherService.getCurrentWeather) //call comme son nom l'indique, fait appel à une opération asynchrone      Fonction qu'on créera dans notre service d'appel à l'API
    yield put(getCurrentWeatherSucces(response.data)) //put renvoit le résultat de call dans la fonction qu'elle a en paramètre
    console.log('les données récupérées', response.data)
  } catch (error) {
    yield put(getCurrentWeatherError(error)) //put renvoit le résultat de call dans la fonction qu'elle a en paramètre
  }
}

function* weatherSaga() { //notre watcher
  yield takeEvery(GET_CURRENT_WEATHER_START, getCurrentWeatherStart)
}

export default weatherSaga