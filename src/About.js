import { createElement } from "./utils";

function About() {

  const header1 = createElement('h1', {textContent: 'About'});

  const p1 = createElement('p', {textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit risus ex, at commodo dui iaculis ut. Donec vitae pulvinar ex. Interdum et malesuada fames ac ante ipsum primis in.'});
  const p2 = createElement('p', {textContent: 'Ut at nisi nec nisl eleifend lobortis non nec sem. Ut et suscipit tellus. Nunc a vulputate velit, sed tincidunt enim. Morbi vehicula ullamcorper tempor. Maecenas dolor augue, imperdiet ac lacus vestibulum, dapibus blandit lacus. Duis vel imperdiet neque, semper.'});
  const p3 = createElement('p', {textContent: 'Sed vitae enim quis nisl pharetra suscipit. Suspendisse fringilla quam turpis. Nullam et ante at erat dignissim mollis et sit.'});

  const innerDiv = createElement('div', {className: 'inner-container'}, [p1, p2, p3]);

  const mainDiv = createElement('div', {className: 'main-div'}, [header1, innerDiv]);

  return mainDiv;
}

export default About;