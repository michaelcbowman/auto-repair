import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Gallery } from './components/gallery/gallery';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Gallery],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {}
