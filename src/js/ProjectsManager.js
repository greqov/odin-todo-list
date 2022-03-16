function ProjectsManager() {
  this.projects = [];
  this.defaultProject = null;
  this.currentProject = null;
}

ProjectsManager.prototype.addProject = function (id) {
  this.projects.push(id);
  this.save();
};

// TODO: add warning about deleting {n} todo items
ProjectsManager.prototype.deleteProject = function (id) {
  if (this.defaultProject === id) {
    console.warn('WARNING: Cannot delete default project');
    return;
  }

  // TODO: update this.currentProject on deleteting current project.

  this.projects = this.projects.filter((i) => i !== id);
  this.save();

  this.storage.removeProject(`Project_${id}`);
};

ProjectsManager.prototype.save = function () {
  this.storage.save(this);
};

export default ProjectsManager;
