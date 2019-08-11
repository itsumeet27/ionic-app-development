import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: '../../home/home.module#HomePageModule' },
      { path: 'about', loadChildren: '../about/about.module#AboutPageModule' },
      { path: 'wordpress-development', loadChildren: '../../services/wordpress-development/wordpress-development.module#WordpressDevelopmentPageModule' },
      { path: 'web-development', loadChildren: '../../services/web-development/web-development.module#WebDevelopmentPageModule' },
      { path: 'responsive-web-development', loadChildren: '../../services/responsive-web-development/responsive-web-development.module#ResponsiveWebDevelopmentPageModule' },
      { path: 'ecommerce-development', loadChildren: '../../services/ecommerce-development/ecommerce-development.module#EcommerceDevelopmentPageModule' },
      { path: 'fashionst', loadChildren: '../../portfolio/fashionst/fashionst.module#FashionstPageModule' },
      { path: 'amittraders', loadChildren: '../../portfolio/amittraders/amittraders.module#AmittradersPageModule' },
      { path: 'netmatesolutions', loadChildren: '../../portfolio/netmatesolutions/netmatesolutions.module#NetmatesolutionsPageModule' },
      { path: 'khadi-premium-cosmetics', loadChildren: '../../portfolio/khadi-premium-cosmetics/khadi-premium-cosmetics.module#KhadiPremiumCosmeticsPageModule' },
      { path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule' }
    ]
  },
  { path: '', redirectTo: '/menu/home' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
