import Todo from './Todo';

function LocStorage() {
  //
}

LocStorage.prototype.save = function (title, obj) {
  localStorage.setItem(title, JSON.stringify(obj));
};

LocStorage.prototype.get = function (key) {
  const restored = JSON.parse(localStorage.getItem(key));

  // TODO: which constuctor should we use?
  return new Todo(restored);
};

// TODO: is it better to save manager, projects, todos separately?

export default LocStorage;
