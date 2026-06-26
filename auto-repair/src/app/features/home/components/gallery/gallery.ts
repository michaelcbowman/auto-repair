import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'swiper/css';
import 'swiper/css/navigation';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gallery {
  images = [
    'assets/20260617_142348.jpeg',
    'assets/1000002278.jpeg',
    'assets/1000002239.jpeg',
    'assets/1000002005.jpeg',
    'assets/1000002039.jpeg',
    'assets/1000002073.jpeg',
    'assets/1000002079.jpeg',
    'assets/1000002080.jpeg',
    'assets/1000002088.jpeg',
    'assets/1000002089.jpeg',
    'assets/1000002092.jpeg',
  ];

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    speed: 500,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  }
}

