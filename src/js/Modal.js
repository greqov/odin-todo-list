import modalEl from './components/modal';
import projectForm from './components/projectForm';
import todoForm from './components/todoForm';
import getScrollWidth from './utils/getScrollWidth';

function Modal() {
  //
}

function insertHelperStyles() {
  const styles = document.createElement('style');
  styles.innerHTML = `
    :root { --scroll-width: ${getScrollWidth()}px; }

    .body-padding-fix {
      padding-right: var(--scroll-width);
    }
  `;
  document.head.appendChild(styles);
}

Modal.prototype.init = function () {
  insertHelperStyles();
  [projectForm, todoForm].forEach((config) => {
    this.renderModal(config);
  });
  this.addHandlers();
};

Modal.prototype.renderModal = function (config) {
  document.body.insertAdjacentHTML('beforeend', modalEl(config));
};

Modal.prototype.openModal = function (modal) {
  document.body.classList.add('overflow-hidden', 'body-padding-fix');
  document.body.classList.remove('overflow-y-scroll');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modal.querySelector('input[type="text"]').focus();
};

Modal.prototype.closeModal = function (modal) {
  document.body.classList.remove('overflow-hidden', 'body-padding-fix');
  document.body.classList.add('overflow-y-scroll');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

Modal.prototype.closeAllModals = function () {
  (document.querySelectorAll('.js-modal') || []).forEach((modal) => {
    this.closeModal(modal);
  });
};

Modal.prototype.addHandlers = function () {
  document.addEventListener('DOMContentLoaded', () => {
    // open modal by [data-modal-target="modal_id"]
    document.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest('[data-modal-target]')) {
        const id = target.closest('[data-modal-target]').dataset.modalTarget;
        const modal = document.getElementById(id);
        this.openModal(modal);
      }
    });

    // close modal by [data-modal-closer]
    // TODO: check for newly created items; use event delegation?
    (document.querySelectorAll('[data-modal-closer]') || []).forEach((closer) => {
      const modal = closer.closest('.js-modal');

      closer.addEventListener('click', () => {
        this.closeModal(modal);
      });
    });

    // close modal by Esc
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.code === 'Escape') {
        this.closeAllModals();
      }
    });
  });
};

export default Modal;
