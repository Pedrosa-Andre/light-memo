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

// Remove all event listeners by replacing the element with its clone.
export function clearEventListeners(element) {
  var old_element = element;
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
}