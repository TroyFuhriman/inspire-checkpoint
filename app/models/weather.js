export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.feels = data.main.feels_like
    this.celsius = (this.kelvin - 273.15).toFixed(2) + "°"
    this.fahrenheit = Math.floor((this.kelvin - 273.15) * (9 / 5) + 32) + "°"
    this.feelsF = ((this.feels - 273.15) * (9 / 5) + 32).toFixed(2) + "°"
    this.feelsC = Math.floor(this.feels - 273.15) + "°"
  }
  get Template() {
    return /*html*/ `	
  <div onclick="app.weatherController.change()">
    <h5>${this.city} ${this.fahrenheit}</h5>
  </div>`
  }





}