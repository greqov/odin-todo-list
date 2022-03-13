function ProjectsManager() {
  this.projects = [];
}

ProjectsManager.prototype.addProject = function (project) {
  this.projects.push(project);
};

ProjectsManager.prototype.deleteProject = function (project) {
  this.projects = this.projects.filter(({ id }) => id !== project.id);
};

export default ProjectsManager;
