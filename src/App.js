import { createElement, generateUserKey } from './utils';
import { initRouter } from './router';

// localStorage.removeItem("userKey");
if (!localStorage.getItem("userKey")) {
  generateUserKey().then((userKey) => {
    console.log('new id: ' + userKey);
    localStorage.setItem("userKey", userKey);
  });
} else {
  console.log('old id: ' + localStorage.getItem("userKey"));
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

  const stickyNav = createElement('div', {
    className: 'sticky-nav'
  }, [home, about]);

  return stickyNav;
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  return createElement('div', {}, [NavMenu(), main]);
}

export default App;
