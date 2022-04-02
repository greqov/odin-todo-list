export default function modal() {
  return `
    <div class="js-modal-overlay hidden fixed top-0 left-0 h-screen w-screen _flex justify-center items-center p-4 bg-black/75 overflow-auto">
      <div class="js-modal w-[480px] max-w-full bg-white rounded-lg shadow-lg">
        <div class="flex justify-between items-center space-x-4 p-4">
          <h3 class="text-lg font-bold">Modal title</h3>
          <button
            class="js-modal-closer text-slate-400 hover:text-orange-600 transition"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="overflow-auto p-4 border-t border-slate-200" style="max-height: calc(100vh - 182px);">
          modal body
        </div>
        <div class="flex justify-end space-x-2 p-4 border-t border-slate-200">
          <button
            class="js-modal-closer js-btn-calcel-form inline-flex px-4 py-2 text-slate-700 bg-transparent hover:border-slate-200 active:border-slate-400 active:bg-slate-200 border border-transparent rounded-md transition"
            type="button"
          >
            Cancel
          </button>
          <button
            class="js-btn-add-project inline-flex px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition"
            type="button"
          >
            Action
          </button>
        </div>
      </div>
    </div>
  `;
}
