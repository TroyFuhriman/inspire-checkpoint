export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }



  get Template() {
    return `<div class="show">
  <h4>${this.quote}</h4></div>
  <div class = "hidden">
  <p class="text-start">- ${this.author}</p>
</div>`
  }

}