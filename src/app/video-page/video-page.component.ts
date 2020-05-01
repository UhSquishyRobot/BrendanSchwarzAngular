import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {

  videoLinks = [
    'https://www.youtube.com/embed/PRWj94lJ5YI',
    'https://www.youtube.com/embed/_QuENiMRO6Q',
  	'https://www.youtube.com/embed/aXSQ-YonnAw',
  	'https://www.youtube.com/embed/rgyuPC4nW2M'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
