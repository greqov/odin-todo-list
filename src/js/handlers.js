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
    const { target: el } = e;

    if (el.closest('.js-form-add-project')) {
      submitProjectForm(e);
      return;
    }

    if (el.closest('.js-form-add-todo')) {
      submitTodoForm(e);
    }
  });

  function removeTodo(el) {
    const todoEl = el.closest('.js-todo-item');
    // 1. get todo id
    const todoId = todoEl.id;
    // 2. get project (hint: current project)
    const projectId = pm.currentProject;
    const project = pm.getRestoredProject(projectId);
    // 3. delete todo from project
    project.removeTodo(todoId);
    // 4. update UI
    todoEl.remove();
  }

  function editTodo(el) {
    const todoId = el.closest('.js-todo-item').id;
    const data = storage.get(`Todo_${todoId}`);

    const form = document.querySelector('.js-form-add-todo');
    // 2. populate form
    Object.entries(data).forEach(([key, value]) => {
      try {
        if (key !== 'complete') {
          form.querySelector(`[name="${key}"]`).value = value;
        } else {
          form.querySelector(`[name="${key}"]`).checked = value;
        }
      } catch (error) {
        console.warn(`Missing [name="${key}"] element\n`, error);
      }
    });
  }

  function toggleTodo(el) {
    const todoId = el.closest('.js-todo-item').id;
    const data = storage.get(`Todo_${todoId}`);
    const todo = new Todo(data);
    const complete = el.checked;
    todo.update({ complete });
  }

  const todoList = document.querySelector('.js-todo-list');
  todoList.addEventListener('click', (e) => {
    const { target: el } = e;
    if (el.closest('.js-btn-todo-delete')) {
      removeTodo(el);
    } else if (el.closest('.js-btn-todo-edit')) {
      editTodo(el);
    } else if (el.closest('.js-todo-toggle')) {
      toggleTodo(el);
    }
  });

  function removeProject(el) {
    const projectEl = el.closest('.js-project-item');
    const projectId = projectEl.id;
    pm.deleteProject(projectId);

    if (projectId !== pm.defaultProject) {
      projectEl.remove();
    }
  }

  function editProject(el) {
    // TODO: add check for empty title on edit action
    const projectId = el.closest('.js-project-item').id;
    const data = storage.get(`Project_${projectId}`);
    const form = document.querySelector('.js-form-add-project');
    // TODO: add loop
    form.querySelector('[name="title"]').value = data.title;
    form.querySelector('[name="id"]').value = data.id;
  }

  function highlightProject(el) {
    const activeClassName = 'text-orange-600';
    const list = el.closest('.js-projects-list');
    const projectEl = el.closest('.js-project-item');
    try {
      list.querySelector(`.${activeClassName}`).classList.remove(`${activeClassName}`);
    } catch (error) {
      console.log(`INFO: There is no highlighted project\n`, error);
    }
    projectEl.classList.add(`${activeClassName}`);
    pm.setCurrentProject(projectEl.id);
  }

  const projectsList = document.querySelector('.js-projects-list');
  projectsList.addEventListener('click', (e) => {
    const { target: el } = e;
    if (el.closest('.js-btn-project-delete')) {
      removeProject(el);
    } else if (el.closest('.js-btn-project-edit')) {
      editProject(el);
    } else if (el.closest('.js-project-item')) {
      highlightProject(el);
      ui.renderProjectTodos();
    }
  });
}
