export default class FilmCard {
  constructor(name, imageLink, rating, releaseYear, imbdID) {
    this._imageLink = imageLink;
    this._rating = rating;
    this._releaseYear = releaseYear;
    this._name = name;
    this._link = `https://www.imdb.com/title/${imbdID}`;
  }


  get name() {
    return this._name;
  }

  get imageLink() {
    return this._imageLink;
  }

  get rating() {
    return this._rating;
  }

  get releaseYear() {
    return this._releaseYear;
  }

  get link() {
    return this._link;
  }
}
