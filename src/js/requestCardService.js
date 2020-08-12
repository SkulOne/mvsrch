export class requestCardService {
  static _page = 1;
  static _filmName = 'dream';


  static get page() {
    return this._page;
  }

  static set page(value) {
    this._page = value;
  }

  static get filmName() {
    return this._filmName;
  }

  static set filmName(value) {
    this._filmName = value;
  }

  static pageIncrement(){
    this._page++;
  }


  static async getFilm() {
    const filmsID = await fetch(`https://www.omdbapi.com/?s=${this.filmName}&page=${this.page}&apikey=143ec804`)
      .then((res) => res.json())
      .then((data) => data.Search.map((item) => item.imdbID));
    return filmsID.map((filmID) => fetch(`https://www.omdbapi.com/?i=${filmID}&apikey=143ec804`)
      .then((res) => res.json()));
  }


}
