import Project from './Project';
import Todo from './Todo';

export default function handlers(ui) {
  const { pm, storage } = ui;

  function submitProjectForm(e) {
    e.preventDefault();
    let project;
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    // NOTE: update OR create action
    if (data.id) {
      project = pm.getRestoredProject(data.id);
      project.update(data);
    } else {
      project = new Project(data);
      pm.addProject(project.id);
    }

    project.save();
    form.reset();
    form.querySelector('[name="id"]').value = '';
    ui.renderProject(project.id);
  }

  function submitTodoForm(e) {
    e.preventDefault();
    let todo;
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    data.complete = !!data.complete; // convert 'on' to true
    const projectId = pm.currentProject;
    const project = pm.getRestoredProject(projectId);

    // NOTE: update OR create action
    if (data.id) {
      todo = project.getRestoredTodo(data.id);
      console.log('orig todo', todo);
      todo.update(data);
    } else {
      todo = data;
    }

    const todoId = project.addTodo(todo);
    form.reset();
    form.querySelector('[name="id"]').value = '';
    form.querySelector('[name="complete"]').removeAttribute('checked');
    // TODO: avoid shaking storage 2 times! (on save, on render)
    ui.renderTodo(todoId);
  }

  // TODO: maybe add more precise dom node, not document?
  document.addEventListener('submit', (e) => {
    const { target } = e;

    if (target.classList.contains('js-form-add-project')) {
      submitProjectForm(e);
      return;
    }

    if (target.classList.contains('js-form-add-todo')) {
      submitTodoForm(e);
    }
  });

  const todoList = document.querySelector('.js-todo-list');
  todoList.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('js-btn-todo-delete')) {
      const todoEl = target.closest('.js-todo-item');
      // 1. get todo id
      const todoId = todoEl.id;
      // 2. get project (hint: current project)
      const projectId = pm.currentProject;
      const project = pm.getRestoredProject(projectId);
      // 3. delete todo from project
      project.removeTodo(todoId);
      // 4. update UI
      todoEl.remove();
    } else if (target.classList.contains('js-btn-todo-edit')) {
      // 1. get todo details from storage
      const todoId = target.closest('.js-todo-item').id;
      const data = storage.get(`Todo_${todoId}`);

      const form = document.querySelector('.js-form-add-todo');
      // 2. populate form
      Object.entries(data).forEach(([key, value]) => {
        try {
          console.log(1, key, value);
          if (key !== 'complete') {
            form.querySelector(`[name="${key}"]`).value = value;
          } else {
            form.querySelector(`[name="${key}"]`).checked = value;
          }
        } catch (error) {
          console.warn(`Missing [name="${key}"] element\n`, error);
        }
      });
    } else if (target.classList.contains('js-todo-toggle')) {
      const todoId = target.closest('.js-todo-item').id;
      const data = storage.get(`Todo_${todoId}`);
      const todo = new Todo(data);
      const complete = target.checked;
      todo.update({ complete });
    }
  });

  const projectsList = document.querySelector('.js-projects-list');
  projectsList.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('js-btn-project-delete')) {
      const projectEl = target.closest('.js-project-item');
      const projectId = projectEl.id;
      pm.deleteProject(projectId);

      if (projectId !== pm.defaultProject) {
        projectEl.remove();
      }
    } else if (target.classList.contains('js-btn-project-edit')) {
      // 1. get project details
      const projectId = target.closest('.js-project-item').id;
      const data = storage.get(`Project_${projectId}`);
      const form = document.querySelector('.js-form-add-project');
      // TODO: add loop
      form.querySelector('[name="title"]').value = data.title;
      form.querySelector('[name="id"]').value = data.id;
      // 2. TODO: show form with populated data (in modal?)
    }
  });
}
