import '../styles/styles.scss';
import FilmCard from './FilmCard';
import CardPrinter from './CardPrinter';
import { mySwiper } from './swiper';
import { requestCardService } from './requestCardService';
import 'bootstrap';
import { Spinner } from './Spinner';

export async function printCards() {
  const films = await requestCardService.getFilm();
  const cards = films.map(async (filmPromise) => {
    const film = await filmPromise;
    return new FilmCard(
      film.Title,
      film.Poster,
      film.Year,
      film.imdbRating,
      film.imdbID,
    );
  });
  for (const cardPromise of cards) {
    const card = await cardPromise.finally(() => {
      mySwiper.update();
    });
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    const printer = new CardPrinter(swiperSlide);
    printer.printCard(card);
    document.querySelector('.swiper-wrapper')
      .append(swiperSlide);
  }
}

async function submitEvent(event) {
  function updateRequestData() {
    requestCardService.filmName = document.forms.main.elements.search.value;
    requestCardService.page = 1;
  }

  function removeSwiperSlides() {
    const swiperContainer = document.querySelector('.swiper-wrapper');
    while (swiperContainer.firstChild) {
      swiperContainer.removeChild(swiperContainer.firstChild);
    }
  }

  const spinner = new Spinner('.swiper-container');

  event.preventDefault();
  updateRequestData();
  removeSwiperSlides();
  spinner.setSpinner();
  await printCards().then(()=>{
    spinner.deleteSpinner();
  });
}

document.forms.main.onsubmit = submitEvent;

window.onload = printCards;
