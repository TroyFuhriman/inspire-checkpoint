export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.feels = data.main.feels_like
    this.celsius = Math.floor(this.kelvin - 273.15) + "°C"
    this.fahrenheit = Math.floor((this.kelvin - 273.15) * (9 / 5) + 32) + "°F"
    this.feelsF = ((this.feels - 273.15) * (9 / 5) + 32).toFixed(2) + "°"
    this.feelsC = Math.floor(this.feels - 273.15) + "°"
  }
  get Template() {
    return /*html*/ `	
  <div class="action" onclick="app.weatherController.changeC()">
    <h5>${this.city} <i class="fas fa-cloud-sun"></i> ${this.fahrenheit}</h5>
  </div>`
  }

  get TemplateC() {
    return /*html*/ `	
  <div class="action" onclick="app.weatherController.changeF()">
    <h5>${this.city} <i class="fas fa-cloud-sun"></i> ${this.celsius}</h5>
  </div>`
  }






}