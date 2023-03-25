export function createElement(type, props = {}, children = []) {
  const element = document.createElement(type);

  // props: {textContent: "Hello world!", id: "header1", "data-productId": 123, ...}
  Object.entries(props).forEach(([key, value]) => {
    if(~key.indexOf('-')) {
      element.setAttribute(key, value); // data attributes
    } else {
      element[key] = value;
    }
  });

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}

// Function to be added to buttons and links for navigation on SPAs.
// route: Relative route, such as "/page1" or "/404"
// newEntry: If the route should or not add a new entry to the browser history.
export function navTo (route, newEntry = true) {
  // If route is the same as current page don't execute the rest.
  if (window.location.pathname === route) return;
  if (newEntry) {
    history.pushState(null, null, route);
  } else {
    history.replaceState(null, null, route);
  }
  window.dispatchEvent(new PopStateEvent('popstate'));
}