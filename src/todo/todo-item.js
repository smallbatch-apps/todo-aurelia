import {EventAggregator} from 'aurelia-event-aggregator';
import {bindable, inject} from 'aurelia-framework';
import TodoService from '../todoservice';
import {TodoCreated} from '../messages';

@inject(TodoService, EventAggregator)
export class TodoItem {
  @bindable item = {checked: false, title: ''};
  @bindable create = false;
  @bindable save;

  constructor(todoService, ea) {
    this.isEditing = false;
    this.todoService = todoService;
    this.ea = ea;
  }

  saveItem(){
    this.isEditing = false;
    this.todoService.updateTodo(this.item);
  }

  checkItem(){
    this.item.checked = !this.item.checked;
    this.todoService.updateTodo(this.item);
  }

  createItem(){
    this.todoService.createTodo(this.item)
      .then(response => {
      this.item = {checked: false, title: ''};
      this.isEditing = false;
      this.ea.publish(new TodoCreated(response.todo));
    });
  }
}