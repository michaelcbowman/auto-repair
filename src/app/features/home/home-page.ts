import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Intro } from './components/intro/intro';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Hero, Intro],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {}
