import { fillWithUserCards } from "./cards";
import { createElement } from "./utils";

function HomePage() {

  const currentDate = createElement('p', {
    className: 'head-date',
    textContent: new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
  });

  const heading = createElement('div', {className: 'main-heading'}, [currentDate]);

  const divider = createElement('hr');

  const cardsContainer = createElement('div', {className: 'card-container', id: 'cardContainer'}, []);
  const mainDiv = createElement('div', {className: 'main-div'}, [heading , divider, cardsContainer]);


  fillWithUserCards();

  return mainDiv;
}

export default HomePage;