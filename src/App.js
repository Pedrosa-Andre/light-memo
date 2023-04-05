import { onAuthStateChanged, signOut } from 'firebase/auth';
import { clearEventListeners, createElement } from './utils';
import { initRouter } from './router';
import { auth } from './firebase';

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

  const login = createElement('a', {
    textContent: 'Log In',
    className: 'button',
    id: 'loginBtn',
  });

  const stickyNav = createElement('div', {
    className: 'sticky-nav'
  }, [home, about, login]);

  return stickyNav;
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  return createElement('div', {}, [NavMenu(), main]);
}

onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log(user.displayName + ' logged in');
    loginBtn.innerHTML = 'Log Out';
    loginBtn.addEventListener('click', async () => signOut(auth));
    loginBtn.href = '/#/home'
  } else {
    console.log('no user');
    loginBtn.innerHTML = 'Log In';
    clearEventListeners(loginBtn); // TODO: Probably can be simplified.
    loginBtn.href = '/#/login'
  }
})

export default App;
