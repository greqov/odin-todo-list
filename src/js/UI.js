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

export default UI;
