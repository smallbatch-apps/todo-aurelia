import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export default class TodoService {
  constructor(http){
    http.configure(instance => {
      instance.withBaseUrl('http://todo-api.dev/');
    });
    this.http = http;
  }

  getTodos() {
    return this.http.get('todos')
      .then(message => {
      return JSON.parse(message.response);
    });
  }

  createTodo(todo) {
    return this.http.post(`todos`, {todo})
      .then(message => JSON.parse(message.response));
  }

  updateTodo(todo) {
    return this.http.put(`todos/${todo.id}`, {todo})
      .then(message => JSON.parse(message.response));
  }
}