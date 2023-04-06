import { copyRemindersToSession, createElement, getRemindersFromSession } from './utils';
import { getUserReminders, database, removeReminder } from './firebase';
import { getUserKey } from './utils';
import { ref, onValue } from 'firebase/database';

function createCard(key, title, time) {
  const cardText = createElement('p', {textContent: title});
  const cardTime = createElement('p', {textContent: time});
  const dellBtn = createElement('button', {type: 'button', textContent: '🗑️', 'data-cardKey': key});
  const div = createElement('div', {className: 'leftCardDiv'}, [cardTime, dellBtn]);
  const userKey = getUserKey();
  dellBtn.addEventListener("click", () => {
    debugger
    removeReminder(userKey, key);
  });

  return createElement('div', {className: 'card', id: key}, [cardText, div]);
}

export async function fillWithUserCards() {
  getUserReminders(getUserKey()).then((reminders) => {
    let container = document.getElementById('cardContainer');
    if (!container) return;
    container.textContent = '';
    copyRemindersToSession(reminders);
    rem = getRemindersFromSession();
    rem.forEach(([key, value]) => {
      const card = createCard(key, value['remTitle'], value['remTime']);
      container.insertAdjacentElement('beforeend', card);
    });

    // Create a copy on the database on the Session, so we don't need
    // to call the database each time we want to check a card (which
    // will be at least once per minute).
  });
}

// Each time the database of the current user changes it updates
// the cards on the page.
const starCountRef = ref(database, 'users/' + getUserKey());
onValue(starCountRef, (snapshot) => {
  fillWithUserCards();
});