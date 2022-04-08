function footer() {
  return `
  <footer class="mt-auto border-t text-center">
    <div class="container mx-auto py-6">
      <div class="flex justify-center items-center space-x-2">
        <a
          href="https://github.com/greqov/odin-todo-list"
          target="_blank"
          class="inline-flex justify-center items-center space-x-1 hover:text-orange-500 transition"
        >
          <svg class="w-6 h-6"><use xlink:href="#icon-code"></use></svg>
          <span>Github</span>
        </a>
      </div>
    </div>
  </footer>
  `;
}

export default footer();
