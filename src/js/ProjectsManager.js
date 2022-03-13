function ProjectsManager() {
  this.projects = [];
}

ProjectsManager.prototype.addProject = function (project) {
  this.projects.push(project);
};

ProjectsManager.prototype.deleteProject = function (project) {
  this.projects = this.projects.filter(({ id }) => id !== project.id);
};

ProjectsManager.prototype.moveTodoToProject = function (todo, projectA, projectB) {
  projectA.removeTodo(todo);
  projectB.addTodo(todo);
};

// TODO: add move todo method

export default ProjectsManager;
