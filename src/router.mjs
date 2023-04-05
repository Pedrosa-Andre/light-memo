
import HomePage from "./HomePage";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import NotFoundPage from "./NotFoundPage";

export function initRouter(mainView) {
  function updateView(newView) {
    mainView.innerHTML = '';
    mainView.appendChild(newView);
  }

  function hashToRoute(hash) {
    console.log('-->' + hash);
    switch (hash) {
      case '#/home':
        updateView(HomePage());
        break;

      case '#/about':
        updateView(About());
        break;

      case '#/login':
        updateView(Login());
        break;

      case '#/register':
        updateView(Register());
        break;

      default:
        updateView(NotFoundPage());
    }
  }

  const defaultHash = window.location.hash || '#/home';
  hashToRoute(defaultHash);

  window.addEventListener('hashchange', (evt) => {
    const newUrl = new URL(evt.newURL);
    const hash = newUrl.hash;

    hashToRoute(hash);
  });
}