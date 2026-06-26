import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  standalone: true,
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
}