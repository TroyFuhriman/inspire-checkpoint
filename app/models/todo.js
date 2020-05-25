export default class Todo {
  constructor(data) {
    this.id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }





  get Template() {
    return /*html*/`
      <div class="row">
      <div class="form-check col-7 ml-3">
      <input class="form-check-input position-static action" onclick="app.todoController.toggleTodoStatus('${this.id}')"
        type="checkbox"  id="${this.id}" ${this.completed ? "checked" : ""} value="option"> ${this.description}
    </div>
    <div class ="col-1 text-danger"> 
    <p onclick="app.todoController.removeTodo('${this.id}')"> <i class="fa fa-times action" aria-hidden="true"></i> </p>
    </div>
    </div>`
  }
}
