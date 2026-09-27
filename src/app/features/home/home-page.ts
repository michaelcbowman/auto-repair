import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Hero],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {}
