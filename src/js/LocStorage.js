function LocStorage() {
  //
}

LocStorage.prototype.save = function (obj) {
  const label = obj.constructor.name;
  const id = obj.id || '';
  localStorage.setItem(`${label}_${id}`, JSON.stringify(obj));
};

LocStorage.prototype.get = function (key) {
  return JSON.parse(localStorage.getItem(key));
};

LocStorage.prototype.remove = function (key) {
  localStorage.removeItem(key);
};

LocStorage.prototype.removeProject = function (key) {
  const keys = this.get(key).todos.map((id) => `Todo_${id}`);
  [...keys, key].forEach((k) => this.remove(k));
};

LocStorage.prototype.isEmpty = function () {
  return localStorage.length === 0;
};

// TODO: is it better to save manager, projects, todos separately?

const storage = new LocStorage();

export default LocStorage;
export { storage };
