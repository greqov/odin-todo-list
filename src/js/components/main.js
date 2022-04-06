function main() {
  return `
  <div class="container mx-auto mb-6 px-4">
    <div class="md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-[1fr_2fr]">
      <div>
        <h2 class="my-4 text-3xl font-bold">Projects</h2>

        <div class="js-projects-list">projects list</div>

        <div class="flex justify-end space-x-2">
          <button
            class="inline-flex px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition select-none"
            type="button"
            data-modal-target="modal-add-project"
          >
            Add project
          </button>
        </div>
      </div>
      <div>
        <h2 class="my-4 text-3xl font-bold">Todos</h2>
        <div class="js-todo-list">todos list</div>

        <div class="flex justify-end space-x-2">
          <button
            class="js-btn-add-todo inline-flex px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition select-none"
            type="button"
            data-modal-target="modal-add-todo"
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
}

export default main();
