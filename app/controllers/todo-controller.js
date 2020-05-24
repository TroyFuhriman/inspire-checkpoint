import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = ''
  let todos = store.State.todos;
  todos.forEach(t => {
    template += t.Template
  })
  document.getElementById("todos").innerHTML = template
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    var form = event.target;
    var todo = {
      description: form.description.value,
    }
    TodoService.addTodoAsync(todo);
    form.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    console.log(todoId)
    TodoService.removeTodoAsync(todoId);
  }
}
