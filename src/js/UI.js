import Todo from './Todo';

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

const todoForm = document.querySelector('.js-form-add-todo');
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  const todo = new Todo(data);
  console.log(todo);
  // TODO: render todo card
  // TODO: add todo to project
  // TODO: save to localStorage
});

export default UI;
