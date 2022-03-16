import Project from './Project';
import Todo from './Todo';

function UI() {
  //
}

UI.prototype.init = function () {
  console.log('init fn');
};

// TODO: maybe add more precise dom node, not document?
document.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('js-btn-submit-project')) {
    e.preventDefault();
    // TODO: use form submit? not button click?
    const form = document.querySelector('.js-form-add-project');
    const data = Object.fromEntries(new FormData(form).entries());
    const project = new Project(data);
    project.save();
    console.log(project);
    // TODO: clear form?
    // form.reset();
    // TODO: render project card
    // TODO: add to projectsManager somehow
  }
});

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

const ui = new UI();

export default ui;
