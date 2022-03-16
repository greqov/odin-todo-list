import Todo from './Todo';
import generateId from './utils/id';

function Project(data) {
  // TODO: do I need to add todos param?
  const { id = generateId(), title: t } = data;

  let title = t.trim().replace(/[<>/]/gi, '');
  if (title === '') {
    title = 'Untitled';
  }

  this.id = id;
  this.title = title;
  this.todos = [];
}

Project.prototype.addTodo = function (todo_) {
  // TODO: do something with param reassignment
  let todo = todo_;
  // TODO: not sure about need of check for 'Todo' object
  if (!(todo instanceof Todo)) {
    todo = new Todo(todo);
  }
  this.todos.push(todo.id);
  // NOTE: need to add storage obj to proto!
  this.storage.save(todo);
  this.save();
};

Project.prototype.removeTodo = function (todo) {
  this.todos = this.todos.filter((i) => i !== todo.id);
  this.storage.remove(`Todo_${todo.id}`);
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

Project.prototype.loadData = function (json) {
  // TODO: do I need this check?
  // TODO: actually can handle array/object cases with
  // console.log(json.constructor.name) or json instanceof Array;
  try {
    json.forEach((item) => {
      this.addTodo(new Todo(item));
    });
  } catch (err) {
    console.warn('WARNING! Require an array of objects\n', err);
  }
};

export default Project;
