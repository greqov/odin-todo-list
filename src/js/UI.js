function UI(pm, storage) {
  // TODO: maybe better pass storage? Do I need pm?
  this.pm = pm; // damn!
  this.storage = storage;
}

UI.prototype.init = function () {
  console.log('init fn');
};

UI.prototype.renderProject = function (id) {
  const container = document.querySelector('.js-projects-list');
  const { title } = this.storage.get(`Project_${id}`);
  // TODO: get id, title
  const template = `
    <div id="${id}" class="js-project-item">
      <span>${title}</span>
      <button class="js-btn-project-edit" type="button">edit</button>
      <button class="js-btn-project-delete" type="button">delete</button>
    </div>`;
  // TODO: show todos count?

  // replace old project node on 'edit/update' action
  const oldItem = container.querySelector(`#${id}`);
  if (oldItem !== null) {
    oldItem.insertAdjacentHTML('afterend', template);
    oldItem.remove();
  } else {
    container.insertAdjacentHTML('beforeend', template);
  }
};

UI.prototype.renderTodo = function (id) {
  const container = document.querySelector('.js-todo-list');
  const { title, dueDate, priority, complete } = this.storage.get(`Todo_${id}`);
  console.log('{complete} render', complete);
  const template = `
    <div id="${id}" class="js-todo-item" style="border-bottom: 1px solid;">
      <div>${title}</div>
      <div>${dueDate}</div>
      <div>priority: ${priority}</div>
      <div>complete: ${complete} <input type="checkbox" ${complete ? 'checked' : ''} /></div>
      <div>
        <button class="js-btn-todo-edit" type="button">edit</button>
        <button class="js-btn-todo-delete" type="button">delete</button>
      </div>
    </div>
  `;

  // TODO: refactor render methods
  // replace old project node on 'edit/update' action
  const oldItem = container.querySelector(`#${id}`);
  if (oldItem !== null) {
    oldItem.insertAdjacentHTML('afterend', template);
    oldItem.remove();
  } else {
    container.insertAdjacentHTML('beforeend', template);
  }
};

export default UI;
