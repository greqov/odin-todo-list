function ProjectsManager() {
  this.projects = [];
  this.defaultProject = null;
  this.currentProject = null;
}

ProjectsManager.prototype.addProject = function (project) {
  this.projects.push(project.id);
  this.save();
};

// TODO: add warning about deleting {n} todo items
ProjectsManager.prototype.deleteProject = function (project) {
  this.projects = this.projects.filter(({ id }) => id !== project.id);
  this.save();
  // TODO: delete from localStorage too
};

ProjectsManager.prototype.save = function () {
  this.storage.save(this);
};

export default ProjectsManager;
