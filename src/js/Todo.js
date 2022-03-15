import generateId from './utils/id';

// TODO: not sure about passing id
function Todo(data) {
  const {
    id = generateId(),
    title = 'Untitled',
    dueDate = new Date(),
    priority = 'low',
    complete = false,
  } = data;

  this.id = id;
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = complete;
}

// TODO: add save (to storage) method too?

Todo.prototype.update = function (data) {
  // TODO: assume data doesn't have undefined values
  Object.assign(this, data);
};

Todo.prototype.toggle = function () {
  this.complete = !this.complete;
};

export default Todo;
