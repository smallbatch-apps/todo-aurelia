import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import TodoService from '../todoservice';
import {TodoCreated} from '../messages';

@inject(TodoService, EventAggregator)
export class TodoList {
  constructor(todoService, ea) {
    this.todoService = todoService;
    ea.subscribe(TodoCreated, message => {
      this.todos.push(message.todo);
    });
    this.todos = [];
  }

  created() {
    this.todoService.getTodos().then(response => {
      this.todos = response.todos;
    });
  }

  editItem(item){
    this.todoService.updateTodo(this.item);
  }
}