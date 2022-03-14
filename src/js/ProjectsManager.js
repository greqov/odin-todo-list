function ProjectsManager() {
  this.projects = [];
}

ProjectsManager.prototype.addProject = function (project) {
  this.projects.push(project.id);
};

// TODO: add warning about deleting {n} todo items
ProjectsManager.prototype.deleteProject = function (project) {
  this.projects = this.projects.filter(({ id }) => id !== project.id);
};

// TODO: add .getProject(id) method?

export default ProjectsManager;
