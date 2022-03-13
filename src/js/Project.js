import generateId from './utils/id';

function Project(data) {
  const { title = 'Untitled' } = data;
  this.id = generateId();
  this.title = title;
  this.todos = [];
}

Project.prototype.addTodo = function (todo_) {
  const todo = todo_;
  todo.project = this.title;
  this.todos.push(todo);
};

Project.prototype.removeTodo = function (todo) {
  this.todos = this.todos.filter(({ id }) => id !== todo.id);
};

// TODO: move to Project Manager?
Project.prototype.rename = function (title) {
  this.title = title;
};

// TODO: move to Project Manager?
Project.prototype.delete = function () {
  // TODO: add 'delete project' method
  console.log('Delete project action');
};

export default Project;
