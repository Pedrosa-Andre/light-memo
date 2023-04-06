import { createElement } from "./utils";

function HomePage() {

  const currentDate = createElement('p', {
    className: 'head-date',
    textContent: new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
  });

  const heading = createElement('div', {className: 'main-heading'}, [currentDate]);

  const divider = createElement('hr');

  function createCard() {
    const text = createElement('p', {textContent: 'blablabla'});
    const time = createElement('p', {textContent: '12:12'});
    const card = createElement('div', {className: 'card'}, [text, time]);
    return card;
  }
  const cardsContainer = createElement('div', {className: 'card-container'}, [createCard(), createCard(), createCard()]);
  const mainDiv = createElement('div', {className: 'main-div'}, [heading , divider, cardsContainer]);

  return mainDiv;
}

export default HomePage;