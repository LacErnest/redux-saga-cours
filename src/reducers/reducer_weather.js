//On importe les types
import { GET_CURRENT_WEATHER_START, GET_CURRENT_WEATHER_SUCCESS, GET_CURRENT_WEATHER_ERROR } from "../actions/types"


const initialState = {
  isLoading: false,  //Ici pour signaler si nos données sont entrain d'être récupérées
  getCurrentWeatherData: {}, //Ici pour garder nos données
  getCurrentWeatherError: ''  //Ici pour garder l'erreur si cette dernière survient
}  //On initialise notre état

//On va créer une fonction général ici, c'est juste une facon de faire ce n'est pas encore l'implémentation de redux-saga

//Ici j'ai décomposé l'action vu qu'une action = {type, payload}
export default function weather(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CURRENT_WEATHER_START:
      return setGetCurrentWeatherStart(state)
    case GET_CURRENT_WEATHER_SUCCESS:
      return setGetCurrentWeatherSuccess(state, payload) //Payload contient les données ici
    case GET_CURRENT_WEATHER_ERROR:
      return setGetCurrentWeatherError(state, payload)  //Payload contient les erreurs ici
    default:
      return state
  }
}

//Nos créeons les réducteurs
//On met à jour l'état (rôle d'un reducteur)

const setGetCurrentWeatherStart = (state) => ({   //Ici on charge les données
  ...state,
  getCurrentWeatherData: {},
  isLoading: true,
  getCurrentWeatherError: null
})

const setGetCurrentWeatherSuccess = (state, payload) => ({ //Ici nos données ont été chargées avec succes
  ...state,
  getCurrentWeatherData: payload,
  isLoading: false,
  getCurrentWeatherError: null
})


const setGetCurrentWeatherError = (state, payload) => ({ //Ici nous avons obtenu une erreur de l'API lors de la récupération des données
  ...state,
  getCurrentWeatherData: {},
  isLoading: false,
  getCurrentWeatherError: payload
})
