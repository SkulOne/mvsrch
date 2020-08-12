import '../styles/styles.scss';

import 'swiper/swiper-bundle.css';
import {
  Swiper, Navigation, Pagination, Scrollbar,
} from 'swiper';
import { requestCardService } from './requestCardService';
import { printCards } from './index';

Swiper.use([Navigation, Pagination, Scrollbar]);

export const mySwiper = new Swiper('.swiper-container', {
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  on: {
    // eslint-disable-next-line no-use-before-define
    slideChange: slideChangeHandler,
  },
});

function slideChangeHandler() {
  if (mySwiper.progress > 0.8) {
    mySwiper.off('slideChange', slideChangeHandler);
    requestCardService.pageIncrement();
    printCards()
      .finally(() => {
        mySwiper.on('slideChange', slideChangeHandler);
      });
  }
}
