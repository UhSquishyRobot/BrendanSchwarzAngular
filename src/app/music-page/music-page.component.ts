import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent implements OnInit {

  musicLinks = [
  	{
  	  src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/621249396&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  	  link: 'https://soundcloud.com/bren-dan-1/outline',
  	  title: 'Outline'
  	},
  	{
  	  src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/532078008&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  	  link: 'https://soundcloud.com/bren-dan-1/2-floors-down',
  	  title: '2 floors down'
  	},
  	{
  	  src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475922031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  	  link: 'https://soundcloud.com/bren-dan-1/mountain-top',
  	  title: 'Mountain Top'
  	},
  	{
  	  src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/241045048&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  	  link: 'https://soundcloud.com/bren-dan-1/grey-cat-and-the-swift-sparrow',
  	  title: 'Grey Cat And The Swift Sparrow'
  	}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
