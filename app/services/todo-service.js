import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Troy/todos/",
  timeout: 8000
});

let count = 0

class TodoService {

  constructor() {
    this.getTodos();
  }

  get count() {
    return count
  }

  getTodos() {
    todoApi.get('')
      .then(res => {
        let todo = res.data.data.map(t => new Todo(t))
        store.commit("todos", todo)
      })
      .catch(err => console.error(err))
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
      .then(res => {
        this.getTodos()
      })
      .catch(err => console.error(err))
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    if (todo) {
      if (todo.completed == true) {
        todo.completed = false
        count--
      }
      else if (todo.completed == false) {
        todo.completed = true
        count++
      }
      todoApi.put(todoId, todo)
        .then(res => {
          this.getTodos()
        })
    }
    return count
  }

  //TODO Make sure that you found a todo,
  //		and if you did find one
  //		change its completed status to whatever it is not (ex: false => true or true => false)


  //TODO do you care about this data? or should you go get something else

  removeTodoAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId)
    if (todo.completed == true) {
      count--
    }
    todoApi.delete(todoId)
      .then(res => {
        this.getTodos()
      })
      .catch(err => console.error(err))
  }
}

const todoService = new TodoService();
export default todoService;
