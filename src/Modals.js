import { createElement } from './utils';
import { createReminder } from './firebase';
import { getUserKey } from './utils';

function Modals() {
  const heading = createElement('h2', {textContent: 'Add New Reminder'});
  const titleLabel = createElement('label', {for: 'remTitle', textContent: 'Title'});
  const titleInput = createElement('input', {type: 'text', name: 'remTitle', id: 'remTitle', required: 'true'});
  const messageLabel = createElement('label', {for: 'remMessage', textContent: 'Message'});
  const messageInput = createElement('textarea', {name: 'remMessage', id: 'remMessage', rows: 5});
  const timeLabel = createElement('label', {for: 'remTime', textContent: 'Time'});
  const timeInput = createElement('input', {type: 'time', name: 'remTime', id: 'remTime', required: 'true'});
  const cancelBtn = createElement('button', {type: 'button', textContent: 'Cancel', id: 'cancelBtn'});
  const createBtn = createElement('button', {type: 'button', textContent: 'Create', id: 'createBtn'});
  const btnDiv = createElement('dvi', {className: 'btnDiv'}, [cancelBtn, createBtn]);

  const modal = createElement('section', {
    id: 'newReminderModal',
    className: 'modal hidden',
  }, [heading, titleLabel, titleInput, messageLabel, messageInput, timeLabel, timeInput, btnDiv]);

  const overlay = createElement('div', {
    id: 'modalOverlay',
    className: 'overlay hidden',
  });

  const closeModal = function () {
    titleInput.value = '';
    messageInput.value = '';
    messageInput.style = '';
    timeInput.value = '';
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  cancelBtn.addEventListener("click", closeModal);
  createBtn.addEventListener("click", () => {
    const userKey = getUserKey();
    console.log('teeeest ' + localStorage.getItem("userKey"));
    console.log('teeeest2 ' + userKey);
    const title = titleInput.value;
    const message = messageInput.value;
    const time = timeInput.value;
    createReminder(userKey, title, message, time);
  });
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  return createElement('div', {}, [modal, overlay]);
}

export default Modals;