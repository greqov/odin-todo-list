import modalEl from './components/modal';
import * as projectForm from './components/projectForm';
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
  this.renderModal(); // not sure
  this.addHandlers();
};

Modal.prototype.renderModal = function () {
  document.body.insertAdjacentHTML(
    'beforeend',
    modalEl({
      id: 'modal-add-project',
      title: 'Add el projecto',
      body: projectForm.form,
      actions: projectForm.buttons,
    })
  );
};

Modal.prototype.addHandlers = function () {
  document.addEventListener('DOMContentLoaded', () => {
    function openModal(modal) {
      document.body.classList.add('overflow-hidden', 'body-padding-fix');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeModal(modal) {
      document.body.classList.remove('overflow-hidden', 'body-padding-fix');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function closeAllModals() {
      (document.querySelectorAll('.js-modal') || []).forEach((modal) => {
        closeModal(modal);
      });
    }

    // open modal by [data-modal-target="modal_id"]
    (document.querySelectorAll('[data-modal-target]') || []).forEach((trigger) => {
      const id = trigger.dataset.modalTarget;
      const modal = document.getElementById(id);

      trigger.addEventListener('click', () => {
        openModal(modal);
      });
    });

    // close modal by [data-modal-closer]
    (document.querySelectorAll('[data-modal-closer]') || []).forEach((closer) => {
      const modal = closer.closest('.js-modal');

      closer.addEventListener('click', () => {
        closeModal(modal);
      });
    });

    // close modal by Esc
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.code === 'Escape') {
        closeAllModals();
      }
    });
  });
};

export default Modal;
