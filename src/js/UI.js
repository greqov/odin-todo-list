function UI(pm, storage) {
  // TODO: maybe better pass storage? Do I need pm?
  this.pm = pm; // damn!
  this.storage = storage;
}

UI.prototype.init = function () {
  console.log('init fn');
};

UI.prototype.renderProject = function (id) {
  const projectsListEl = document.querySelector('.js-projects-list');
  const { title } = this.storage.get(`Project_${id}`);
  // TODO: get id, title
  const projectTemplate = `
    <div id="Project_${id}">
      <span>${title}</span>
      <button type="button">edit</button>
      <button type="button">delete</button>
    </div>`;
  // TODO: show todos count?

  projectsListEl.insertAdjacentHTML('beforeend', projectTemplate);
};

UI.prototype.renderTodo = function (id) {
  const container = document.querySelector('.js-todo-list');
  const { title, dueDate, priority, complete } = this.storage.get(`Todo_${id}`);
  const template = `
    <div id="Todo_${id}" style="border-bottom: 1px solid;">
      <div>${title}</div>
      <div>${dueDate}</div>
      <div>priority: ${priority}</div>
      <div>complete: ${complete}</div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', template);
};

export default UI;
