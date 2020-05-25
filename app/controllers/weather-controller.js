import WeatherService from "../services/weather-service.js";
import store from "../store.js";
import weatherService from "../services/weather-service.js";



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
  changeC() {
    let temp = store.State.weather.TemplateC
    document.getElementById("weather").innerHTML = temp
  }
  changeF() {
    let temp = store.State.weather.Template
    document.getElementById("weather").innerHTML = temp
  }





}
