import { createElement, navTo } from "./utils";

function HomePage() {

  const currentDate = createElement('div', {
    className: 'head-date',
    textContent: new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
  });
  const divider = createElement('hr');

  function createCard() {
    const text = createElement('p', {textContent: 'blablabla'});
    const time = createElement('p', {textContent: '12:12'});
    const card = createElement('div', {className: 'card'}, [text, time]);
    return card;
  }
  const cardsContainer = createElement('div', {className: 'card-container'}, [createCard(), createCard(), createCard()]);
  const mainDiv = createElement('div', {className: 'main-div'}, [currentDate, divider, cardsContainer]);

  return mainDiv;
}

export default HomePage;