import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)


function _drawQuote() {
  let quote = store.State.quote
  // @ts-ignore
  let template = quote.Template
  document.getElementById("quote").innerHTML = template
}
export default class QuoteController {





  constructor() {
    store.subscribe("quote", _drawQuote)

  }




}
