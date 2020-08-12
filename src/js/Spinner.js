export class Spinner {
  constructor(container) {
    this._container = document.querySelector(container);
    this._spinner = document.createElement('img');
    this._spinner.src = '../src/assets/Eclipse-1s-200px.svg';
  }

  setSpinner(){
    this._container.prepend(this._spinner);
  }

  deleteSpinner(){
    this._spinner.remove();
  }
}
