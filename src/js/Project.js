import generateId from './utils/id';

function Project(data) {
  const { title = 'Untitled' } = data;
  this.id = generateId();
  this.title = title;
  this.todos = [];
}

Project.prototype.addTodo = function (todo) {
  this.todos.push(todo);
};

Project.prototype.removeTodo = function (todo) {
  this.todos = this.todos.filter(({ id }) => id !== todo.id);
};

Project.prototype.moveTodo = function (todo, project) {
  this.removeTodo(todo);
  project.addTodo(todo);
};

// TODO: move to Project Manager?
Project.prototype.rename = function (title) {
  this.title = title;
};

export default Project;
