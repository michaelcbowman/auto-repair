import { Component } from '@angular/core';
import { Gallery } from "../gallery/gallery";

@Component({
  selector: 'app-hero',
  imports: [Gallery],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
