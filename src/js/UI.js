import { storage } from './LocStorage';
import { projectsManager } from './ProjectsManager';
import layout from './components/layout';
import checkbox from './components/checkbox';
import handlers from './handlers';
import Modal from './Modal';

function UI() {
  //
}

// NOTE: does it make sense to store pm/storage in prototype?
UI.prototype.pm = projectsManager;
UI.prototype.storage = storage;

UI.prototype.init = function () {
  document.querySelector('html').classList.add('scroll-smooth');
  document.body.classList.add(
    'relative',
    'min-h-screen',
    'overflow-y-scroll',
    'flex',
    'flex-col',
    'font-sans',
    'bg-zinc-50',
    'selection:bg-pink-300'
  );

  document.body.insertAdjacentHTML('beforeend', layout);

  projectsManager.projects.forEach((id) => {
    this.renderProject(id);
  });
  this.renderProjectTodos();

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
  const template = `
    <div id="${id}" class="js-project-item ${id === this.pm.currentProject ? 'text-orange-600' : ''}
      mb-4 p-4 group flex justify-between items-center bg-white rounded-lg shadow-lg hover:cursor-pointer
    ">
      <span class="text-lg font-bold">${title}</span>
      <div class="flex items-center space-x-2">
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

UI.prototype.highlightCurrentProject = function () {
  const activeClassName = 'text-orange-600';
  const list = document.querySelector('.js-projects-list');
  const projectEl = list.querySelector(`#${this.pm.currentProject}`);
  try {
    list.querySelector(`.${activeClassName}`).classList.remove(`${activeClassName}`);
  } catch (error) {
    console.log(`INFO: There is no highlighted project\n`, error);
  }
  projectEl.classList.add(`${activeClassName}`);
};

UI.prototype.renderTodo = function (id) {
  const container = document.querySelector('.js-todo-list');
  const { title, dueDate, priority, complete } = this.storage.get(`Todo_${id}`);
  const template = `
    <div id="${id}"
      class="js-todo-item mb-4 p-4 bg-white rounded-lg shadow-lg"
    >
      <div class="flex space-x-2">
        <div>
        ${checkbox('', 'complete', `check_${id}`, complete)}
        </div>
        <div>
          <div class="mb-2">${title}</div>
          <div>
            <span class="inline-block">
              <span class="text-slate-500 italic">priority:</span>
              <span class="">${priority}</span><span class="text-slate-500 italic">,</span>
            </span>
            <span class="inline-block">
              <span class="text-slate-500 italic">date:</span>
              <span class="">${dueDate}</span>
            </span>
          </div>
          <div class="flex items-center mt-2 space-x-2">
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
      </div>
    </div>
  `;

  // TODO: refactor render methods
  // replace old project node on 'edit/update' action
  replaceOldItem(container, id, template);
};

UI.prototype.removeNoTodosMessage = function () {
  const message = document.querySelector('.js-no-todos-message');
  if (message) {
    message.remove();
  }
};

UI.prototype.renderNoTodosMessage = function () {
  const message = `<p class="js-no-todos-message mb-4">Wow! Such empty! <span class="underline italic cursor-pointer hover:text-orange-500 transition" data-modal-target="modal-add-todo">Add first todo?</span></p>`;
  document.querySelector(
    '.js-todo-list'
  ).innerHTML = `<div class="js-no-todos-message">${message}</div>`;
};

UI.prototype.renderProjectTodos = function (projectId = this.pm.currentProject) {
  document.querySelector('.js-todo-list').innerHTML = '';
  const data = this.storage.get(`Project_${projectId}`);
  if (data.todos.length === 0) {
    this.renderNoTodosMessage();
  } else {
    data.todos.forEach((id) => {
      this.renderTodo(id);
    });
  }
};

UI.prototype.addHandlers = function () {
  handlers(this);
};

const ui = new UI();

export { ui };
export default UI;
