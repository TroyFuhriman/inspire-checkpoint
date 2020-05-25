import ClockService from "../services/clock-service.js";
import store from "../store.js";

function _drawClock() {
  let date = new Date()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  hour = updateTime(hour)
  minutes = updateTime(minutes)
  seconds = updateTime(seconds)
  if (hour > 12) {
    hour -= 12
  }
  document.getElementById("clock").innerText = hour + ":" + minutes + ":" + seconds;
  var t = setTimeout(() => {
    _drawClock()
  }, 1000);
}
function updateTime(t) {
  if (t < 10) {
    return "0" + t
  }
  return t

}



export default class ClockController {







  constructor() {
    _drawClock()
  }




}
