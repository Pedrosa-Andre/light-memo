
import HomePage from "./HomePage";
import About from "./About";

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
    }
  }

  console.log('running router');

  window.addEventListener('popstate', function(event) {
    console.log(event);
    console.log(window.location.pathname);
    console.log('A');
    pathToRoute(window.location.pathname);
  });

  window.addEventListener('load', function() {
    console.log(window.location.pathname);
    console.log('B');
    pathToRoute(window.location.pathname);
  });

}