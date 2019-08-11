import { Component, OnInit } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
  	{
  		title: 'Home',
  		url: '/menu/home'
  	},
  	{
  		title: 'About',
  		url: '/menu/about'
  	},
  	{
  		title: 'Contact',
  		url: '/menu/contact'
  	}
  ];

  selectedPath = '';

  constructor(private router: Router) { 
  	this.router.events.subscribe((event: RouterEvent) => {
  		this.selectedPath = event.url;
  	});
  }

  ngOnInit() {
  }

}
