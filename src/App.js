import { createElement, generateUserKey, getUserKey, setUserKey } from './utils';
import { initRouter } from './router';
import Modals from './Modals';

// DEBUG
setUserKey('IDbbb');

let userKey = getUserKey();
if (!userKey) {
  generateUserKey().then((key) => {
    console.log('created new id: ' + key);
    setUserKey(key);
  });
} else {
  console.log('using old id: ' + userKey);
}

function NavMenu() {
  const home = createElement('a', {
    textContent: 'Home',
    className: 'button',
    href: '/#/home',
  });

  const about = createElement('a', {
    textContent: 'About',
    className: 'button',
    href: '/#/about',
  });

  const newRem = createElement('button', {
    textContent: 'New Reminder',
    className: 'button',
  });

  const openModal = function () {
    newReminderModal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
  };

  newRem.addEventListener("click", openModal);

  const stickyNav = createElement('div', {
    className: 'sticky-nav'
  }, [home, about, newRem]);

  return stickyNav;
}

function App() {
  const main = createElement('main');

  initRouter(main);

  return createElement('div', {}, [Modals(), NavMenu(), main]);
}

export default App;
