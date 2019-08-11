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
      ]
    },
    {
      title: 'Portfolio',
      children: [
        {
          title: 'Khadi Premium Cosmetics',
          url: '/menu/khadi-premium-cosmetics',
          icon: 'gift'
        },
        {
          title: 'NetMate Solutions',
          url: '/menu/netmatesolutions',
          icon: 'desktop'
        },
        {
          title: 'Amit Traders',
          url: '/menu/amittraders',
          icon: 'briefcase'
        },
        {
          title: 'FashionST',
          url: '/menu/fashionst',
          icon: 'basket'
        },
      ]
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
