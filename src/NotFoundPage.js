import { createElement } from "./utils";

function NotFoundPage() {

  const h1 = createElement('h1', {
    textContent: "Woops, sorry! Page not found!",
    className: "center-text"
  });
  const mainDiv = createElement('div', {className: 'main-div'}, [h1]);

  return mainDiv;
}

export default NotFoundPage;