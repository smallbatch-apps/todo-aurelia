export class App {
  configureRouter(config, router){
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home-page', title: "Home", nav: true},
      { route: 'todo', name: 'todo', moduleId: 'todo/todo-list', nav: true, title: 'Todo List' },
      { route: 'about', name: 'about-page', moduleId: 'about-page', nav: true, title: 'About Us' }      
    ]);
    this.router = router;
  }
}