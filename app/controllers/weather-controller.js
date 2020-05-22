import WeatherService from "../services/weather-service.js";
import store from "../store.js";



function drawWeather() {
  let weather = store.State.weather
  let template = weather.Template
  document.getElementById("weather").innerHTML = template
}

export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }






}
