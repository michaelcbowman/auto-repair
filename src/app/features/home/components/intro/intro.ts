import { Component } from '@angular/core';
import { Gallery } from "../gallery/gallery";

@Component({
  selector: 'app-intro',
  imports: [Gallery],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {}
