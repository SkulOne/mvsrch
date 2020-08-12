export default class CardPrinter {
  constructor(container) {
    this._container = container;
  }

  printCard(film) {
    const image = document.createElement('img');
    image.src = film.imageLink;
    image.classList.add('film-photo');
    const filmName = document.createElement('a');
    filmName.href = film.link;
    filmName.text = film.name;
    filmName.classList.add('film-name');
    const filmYear = document.createElement('span');
    filmYear.textContent = film.releaseYear;
    filmYear.classList.add('year');
    const rating = document.createElement('span');
    rating.textContent = film.rating;
    rating.classList.add('rating');

    const additionallyContainer = document.createElement('div');
    additionallyContainer.append(filmYear);
    additionallyContainer.append(rating);
    additionallyContainer.classList.add('additionally');

    const cardContainer = document.createElement('div');
    cardContainer.append(image);
    cardContainer.append(filmName);
    cardContainer.append(additionallyContainer);
    cardContainer.classList.add('card');

    this._container.append(cardContainer);
  }
}
