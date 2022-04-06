import layout from './components/layout';
import checkbox from './components/checkbox';
import handlers from './handlers';
import Modal from './Modal';

function UI(pm, storage) {
  // TODO: maybe better pass storage? Do I need pm?
  this.pm = pm; // damn!
  this.storage = storage;
}

UI.prototype.init = function () {
  console.log('UI init fn');
  document.body.insertAdjacentHTML('beforeend', layout);
  new Modal().init();
  this.addHandlers();
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
      mb-4 p-4 group flex justify-between items-center bg-white rounded-lg shadow-lg hover:cursor-pointer
    ">
      <span class="js-project-item-box text-lg font-bold">${title}</span>
      <div class="space-x-2">
        <button
          class="js-btn-project-edit opacity-0 text-slate-400 group-hover:opacity-100 hover:text-sky-500 transition"
          type="button"
          title="Edit project"
          data-modal-target="modal-add-project"
        >
          <svg class="w-6 h-6"><use xlink:href="#icon-edit"></use></svg>
        </button>
        <button
          class="js-btn-project-delete opacity-0 text-slate-400 group-hover:opacity-100 hover:text-red-500 transition"
          type="button"
          title="Delete project"
        >
          <svg class="w-6 h-6"><use xlink:href="#icon-trash"></use></svg>
        </button>
      </div>
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
        ${checkbox('Complete?', 'complete', `check_${id}`, complete)}
      </div>
      <div>
        <button
          class="js-btn-todo-edit underline italic text-slate-400 hover:text-sky-500 transition"
          type="button"
          title="Edit todo"
          data-modal-target="modal-add-todo"
        >
          <svg class="w-6 h-6"><use xlink:href="#icon-edit"></use></svg>
        </button>
        <button
          class="js-btn-todo-delete underline italic text-slate-400 hover:text-red-500 transition"
          type="button"
          title="Delete todo"
        >
          <svg class="w-6 h-6"><use xlink:href="#icon-trash"></use></svg>
        </button>
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
