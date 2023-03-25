import { createElement, navTo } from './utils';
import { initRouter } from './router';

function NavMenu() {
  const home = createElement('button', {
    textContent: 'Home',
  });
  home.addEventListener('click', () => navTo('/'));

  const about = createElement('button', {
    textContent: 'About',
  });
  about.addEventListener('click', () => navTo('/about'));

  const login = createElement('button', {
    textContent: 'Log In',
  });
  login.addEventListener('click', () => navTo('/login'));

  const stickyNav = createElement('div', {
    className: 'sticky-nav'
  }, [home, about, login]);

  return stickyNav;
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  return createElement('div', {className: 'what'}, [NavMenu(), main]);
}

export default App;
