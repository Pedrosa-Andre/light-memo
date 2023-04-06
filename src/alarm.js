import { createElement, getRemindersFromSession } from "./utils"

var alarmSound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg');

export function initAlarm() {
  console.log(alarmSound);

  function showAlarm(reminder) {
    alarmBody.textContent = '';
    const heading = createElement('h2', {textContent: reminder[1]['remTitle']});
    const message = createElement('p', {textContent: reminder[1]['remMessage']});
    alarmBody.insertAdjacentElement('beforeend', heading);
    alarmBody.insertAdjacentElement('beforeend', message);
    activeAlarmModal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
    alarmSound.play();
  }

  function getHHMMtime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return hours + ':' + minutes;
  }

  function checkAlarm() {
    console.log('running');

    reminders = getRemindersFromSession();
    if (!reminders) return;

    reminders.forEach((reminder) => {
      // if ('Title A' === reminder[1]['remTitle']) {
      if (getHHMMtime() === reminder[1]['remTime']) {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        console.log(reminder[0] + ' ' + reminder[1]['remTime']);
        showAlarm(reminder);
      }
    });
  }

  checkAlarm();

  setInterval(function () {
    checkAlarm();
    // DEBUG - set to 60000
  },  5000)
}



export function stopAlarm() {
  alarmSound.pause();
}