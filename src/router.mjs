
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

  function pathToRoute(path) {
    switch (path) {
      case '/':
        updateView(HomePage());
        break;

      case '/about':
        updateView(About());
        break;

      case '/login':
        updateView(Login());
        break;

      case '/register':
        updateView(Register());
        break;

      default:
        updateView(NotFoundPage());
    }
  }

  console.log('running router');

  // Catch the navTo() and browser's prev/next arrows.
  window.addEventListener('popstate', function(event) {
    console.log(event);
    console.log(window.location.pathname);
    console.log('Popstate Listener');
    pathToRoute(window.location.pathname);
  });

  // Catch the <a> and manual entries on the browser.
  window.addEventListener('load', function() {
    console.log(window.location.pathname);
    console.log('Load Listener');
    pathToRoute(window.location.pathname);
  });

}