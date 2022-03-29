import handlers from './handlers';

function UI(pm, storage) {
  // TODO: maybe better pass storage? Do I need pm?
  this.pm = pm; // damn!
  this.storage = storage;
}

UI.prototype.init = function () {
  console.log('init fn');
};

function replaceOldItem(container, id, template) {
  const oldItem = container.querySelector(`#${id}`);
  if (oldItem !== null) {
    oldItem.insertAdjacentHTML('afterend', template);
    oldItem.remove();
  } else {
    container.insertAdjacentHTML('beforeend', template);
  }
}

UI.prototype.renderProject = function (id) {
  const container = document.querySelector('.js-projects-list');
  const { title } = this.storage.get(`Project_${id}`);
  // TODO: get id, title
  const template = `
    <div id="${id}" class="js-project-item ${id === this.pm.currentProject ? 'text-orange-600' : ''}
      mb-4 p-4 bg-white rounded-lg shadow-lg
    ">
      <span class="js-project-item-box">${title}</span>
      <button class="js-btn-project-edit underline italic text-slate-700" type="button">edit</button>
      <button class="js-btn-project-delete underline italic text-slate-700" type="button">delete</button>
    </div>`;
  // TODO: show todos count?

  // replace old project node on 'edit/update' action
  replaceOldItem(container, id, template);
};

UI.prototype.renderTodo = function (id) {
  const container = document.querySelector('.js-todo-list');
  const { title, dueDate, priority, complete } = this.storage.get(`Todo_${id}`);
  const template = `
    <div id="${id}"
      class="js-todo-item mb-4 p-4 bg-white rounded-lg shadow-lg"
    >
      <div>${title}</div>
      <div>${dueDate}</div>
      <div>priority: ${priority}</div>
      <div>
        complete:
        <input type="checkbox" ${complete ? 'checked' : ''} class="js-todo-toggle" />
      </div>
      <div>
        <button class="js-btn-todo-edit underline italic text-slate-700" type="button">edit</button>
        <button class="js-btn-todo-delete underline italic text-slate-700" type="button">delete</button>
      </div>
    </div>
  `;

  // TODO: refactor render methods
  // replace old project node on 'edit/update' action
  replaceOldItem(container, id, template);
};

UI.prototype.renderProjectTodos = function (projectId = this.pm.currentProject) {
  const data = this.storage.get(`Project_${projectId}`);
  data.todos.forEach((id) => {
    this.renderTodo(id);
  });
};

UI.prototype.addHandlers = function () {
  handlers(this);
};

export default UI;
