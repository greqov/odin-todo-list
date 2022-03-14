import Todo from './Todo';

function LocStorage() {
  //
}

LocStorage.prototype.save = function (obj) {
  const label = obj.constructor.name;
  const id = obj.id || '';
  localStorage.setItem(`${label}_${id}`, JSON.stringify(obj));
};

LocStorage.prototype.get = function (key) {
  const restored = JSON.parse(localStorage.getItem(key));

  // TODO: which constuctor should we use?
  return new Todo(restored);
};

LocStorage.prototype.remove = function (obj) {
  const key = `${obj.constructor.name}_${obj.id}`;
  localStorage.removeItem(key);
};

// TODO: is it better to save manager, projects, todos separately?

export default LocStorage;
