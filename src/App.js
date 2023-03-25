import { createElement, navTo } from './utils';
import { initRouter } from './router';

function NavMenu() {
  const home = createElement('button', {
    textContent: 'Home',
  });
  home.addEventListener('click', () => navTo('/'));

  const login = createElement('button', {
    textContent: 'Log In',
  });
  login.addEventListener('click', () => navTo('/login'));

  const about = createElement('button', {
    textContent: 'About',
  });
  about.addEventListener('click', () => navTo('/about'));

  const newReminder = createElement('button', {
    textContent: 'Add New Reminder',
  });
  // newReminder.addEventListener('click', () => to be implemented);

  const stickyNav = createElement('div', {
    className: 'sticky-nav'
  }, [home, login, about, newReminder]);

  return stickyNav;
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  return createElement('div', {className: 'what'}, [NavMenu(), main]);
}

export default App;
