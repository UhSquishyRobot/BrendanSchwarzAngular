import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  navItems = [
  	{
  		text: 'BRENDAN SCHWARZ',
  		isSelected: true,
  		link: 'home'
  	},
  	{
  		text: 'VIDEO',
  		isSelected: false,
  		link: 'video'
  	},
  	{
  		text: 'MUSIC',
  		isSelected: false,
  		link: 'music'
  	},
  	{
  		text: 'WRITING',
  		isSelected: false,
  		link: 'writing'
  	},
  	{
  		text: 'CONTACT',
  		isSelected: false,
  		link: 'contact'
  	}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(navItem): void {
  	this.navItems
  		.find(ni => ni.isSelected)
  		.isSelected = false;

  	navItem.isSelected = true;
  }

  applyStyles(navItem, i) {
  	return {
  		'my-name': i === 0, 
  		'menu-item': true, 
  		'menu-item-selected': navItem.isSelected && i !== 0, 
  		'my-name-selected': navItem.isSelected && i === 0
  	}
  }

}
