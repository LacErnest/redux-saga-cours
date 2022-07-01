import { GET_CURRENT_WEATHER_ERROR, GET_CURRENT_WEATHER_START, GET_CURRENT_WEATHER_SUCCESS } from "./types"

export const getCurrentWeatherStart = (payload) => ({
  type: GET_CURRENT_WEATHER_START,
  payload
})

export const getCurrentWeatherSucces = (payload) => ({
  type: GET_CURRENT_WEATHER_SUCCESS,
  payload
})

export const getCurrentWeatherError = (payload) => ({
  type: GET_CURRENT_WEATHER_ERROR,
  payload
})
