export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }



  get Template() {
    return `<div>
  <h4>${this.quote}</h4>
  <p class="text-start">- ${this.author}</p>
</div>`
  }

}