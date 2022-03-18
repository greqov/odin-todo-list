import generateId from './utils/id';
import trimStr from './utils/trimStr';

function Todo(data) {
  const { id, title, dueDate, priority = 'low', complete } = data;

  this.id = id || generateId();
  this.title = trimStr(title);
  this.dueDate = dueDate || new Date();
  this.priority = priority;
  this.complete = complete === 'on';
}

Todo.prototype.save = function () {
  this.storage.save(this);
};

Todo.prototype.update = function (data) {
  // TODO: assume data doesn't have undefined values
  Object.assign(this, data);
  this.save();
};

// TODO: remove it?
Todo.prototype.toggle = function () {
  this.complete = !this.complete;
};

export default Todo;
