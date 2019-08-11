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
  		url: '/menu/home',
      icon: 'home'
  	},
  	{
  		title: 'About',
  		url: '/menu/about',
      icon: 'information-circle'
  	},
    {
      title: 'Services',
      children: [
        {
          title: 'WordPress Development',
          url: '/menu/wordpress-development',
          icon: 'logo-wordpress'
        },
        {
          title: 'Web Development',
          url: '/menu/web-development',
          icon: 'globe'
        },
        {
          title: 'Responsive Web Development',
          url: '/menu/responsive-web-development',
          icon: 'phone-portrait'
        },
        {
          title: 'E-Commerce Development',
          url: '/menu/ecommerce-development',
          icon: 'cart'
        },
      ],
      icon: 'speedometer',
    },
  	{
  		title: 'Contact',
  		url: '/menu/contact',
      icon: 'person'
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
