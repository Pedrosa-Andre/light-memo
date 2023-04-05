
import HomePage from "./HomePage";
import About from "./About";
import NotFoundPage from "./NotFoundPage";

export function initRouter(mainView) {
  function updateView(newView) {
    mainView.innerHTML = '';
    mainView.appendChild(newView);
  }

  function hashToRoute(hash) {
    console.log('--> ' + hash);
    switch (hash) {
      case '#/home':
        updateView(HomePage());
        break;

      case '#/about':
        updateView(About());
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