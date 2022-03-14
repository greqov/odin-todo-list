import generateId from './utils/id';

function Project(data) {
  const { title = 'Untitled' } = data;
  this.id = generateId();
  this.title = title;
  this.todos = [];
}

Project.prototype.addTodo = function (todo) {
  this.todos.push(todo.id);
  // NOTE: need to add storage obj to proto!
  this.storage.save(todo);
  this.save();
};

Project.prototype.removeTodo = function (todo) {
  this.todos = this.todos.filter((i) => i !== todo.id);
  this.storage.remove(todo);
  this.save();
};

Project.prototype.moveTodo = function (todo, project) {
  this.removeTodo(todo);
  project.addTodo(todo);
};

Project.prototype.rename = function (title) {
  this.title = title;
  this.save();
};

Project.prototype.save = function () {
  this.storage.save(this);
};

export default Project;
