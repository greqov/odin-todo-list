import { storage } from './LocStorage';
import Todo from './Todo';
import generateId from './utils/id';
import trimStr from './utils/trimStr';

function Project(data) {
  // TODO: do I need to add todos param?
  // TODO: replace data object with {...} like in ProjectsManager constructor
  const { id, title, todos } = data;

  this.id = id || generateId();
  this.title = trimStr(title); // or 'Untitled'?
  this.todos = todos || [];
}

Project.prototype.storage = storage;

// TODO: it's not clear is it a Todo item or {}
Project.prototype.addTodo = function (todo_) {
  // TODO: do something with param reassignment
  let todo = todo_;
  // TODO: not sure about need of check for 'Todo' object
  // use in render new todo already so be aware!
  if (!(todo instanceof Todo)) {
    todo = new Todo(todo);
  }
  this.todos.push(todo.id);
  // NOTE: need to add storage obj to proto!
  this.storage.save(todo);
  this.save();

  return todo.id;
};

Project.prototype.removeTodo = function (id) {
  this.todos = this.todos.filter((i) => i !== id);
  this.storage.remove(`Todo_${id}`);
  this.save();
};

Project.prototype.getRestoredTodo = function (id) {
  const obj = this.storage.get(`Todo_${id}`);
  return new Todo(obj);
};

// TODO: maybe avoid removing todo from storage?
// TODO: maybe pass projectId?
Project.prototype.moveTodo = function (todo, project) {
  console.warn('WARNING! .moveTodo() does not work yet!');
  this.removeTodo(todo.id);
  project.addTodo(todo);
};

Project.prototype.update = function (data) {
  const obj = data;
  obj.title = trimStr(obj.title);
  Object.assign(this, obj);
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
