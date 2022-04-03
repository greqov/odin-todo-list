const id = 'modal-add-project';
const title = 'Add el projecto';

const form = `
  <form class="js-form-add-project" id="addProjectForm" action="#">
    <input type="hidden" name="id" value="" />

    <label class="block mb-4">
      <span class="block font-medium text-slate-700">Project title</span>
      <input
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm text-base placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        type="text"
        name="title"
        placeholder="Project title"
        autofocus
      />
    </label>
  </form>
`;
// TODO: enable autofocus

const actions = `
  <button
    class="inline-flex px-4 py-2 text-slate-700 bg-transparent hover:border-slate-200 active:border-slate-400 active:bg-slate-200 border border-transparent rounded-md transition select-none"
    type="button"
    data-modal-closer
  >
    Cancel
  </button>
  <button
    class="inline-flex px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition select-none"
    type="submit"
    form="addProjectForm"
    data-modal-closer
  >
    Add project
  </button>
`;

export default { id, title, body: form, actions };
