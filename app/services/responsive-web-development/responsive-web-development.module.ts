import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResponsiveWebDevelopmentPage } from './responsive-web-development.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsiveWebDevelopmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResponsiveWebDevelopmentPage]
})
export class ResponsiveWebDevelopmentPageModule {}
