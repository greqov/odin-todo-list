export default function checkbox(label, name, id, checked) {
  return `
    <div class="flex items-start space-x-2">
      <div class="flex items-center h-5 pt-[3px]">
        <input
          id="${id}"
          name="${name}"
          type="checkbox"
          class="js-todo-toggle focus:ring-sky-500 h-4 w-4 text-sky-500 border-slate-300 rounded"
          ${checked ? 'checked' : ''}
        />
      </div>
      <label for="${id}" class="font-medium text-slate-700">${label}</label>
    </div>
  `;
}
