import { createElement } from './utils';
import { createReminder } from './firebase';
import { getUserKey } from './utils';
import { stopAlarm } from './alarm';

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
  const btnDiv = createElement('div', {className: 'btnDiv'}, [cancelBtn, createBtn]);

  const newReminderModal = createElement('section', {
    id: 'newReminderModal',
    className: 'modal hidden',
  }, [heading, titleLabel, titleInput, messageLabel, messageInput, timeLabel, timeInput, btnDiv]);


  const alarmBody = createElement('div', {id: 'alarmBody'});
  const okayBtn = createElement('button', {type: 'button', textContent: 'Okay', id: 'okayBtn'});
  const btnDiv2 = createElement('div', {className: 'btnDiv'}, [okayBtn]);

  const activeAlarmModal = createElement('section', {
    id: 'activeAlarmModal',
    className: 'modal hidden',
  }, [alarmBody, btnDiv2]);

  const overlay = createElement('div', {
    id: 'modalOverlay',
    className: 'overlay hidden',
  });

  const closeRemModal = function () {
    titleInput.value = '';
    messageInput.value = '';
    messageInput.style = '';
    timeInput.value = '';
    newReminderModal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  const closeAlarmModal = function () {
    activeAlarmModal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  // Buttons
  okayBtn.addEventListener("click", closeAlarmModal);
  okayBtn.addEventListener("click", stopAlarm);
  cancelBtn.addEventListener("click", closeRemModal);
  createBtn.addEventListener("click", () => {
    const userKey = getUserKey();
    const title = titleInput.value;
    const message = messageInput.value;
    const time = timeInput.value;
    createReminder(userKey, title, message, time);
    closeRemModal();
  });

  // Overlay
  overlay.addEventListener("click", closeRemModal);
  overlay.addEventListener("click", closeAlarmModal);
  overlay.addEventListener("click", stopAlarm);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !newReminderModal.classList.contains("hidden")) {
      closeRemModal();
      closeAlarmModal();
      stopAlarm();
    }
  });

  return createElement('div', {}, [newReminderModal, activeAlarmModal, overlay]);
}

export default Modals;