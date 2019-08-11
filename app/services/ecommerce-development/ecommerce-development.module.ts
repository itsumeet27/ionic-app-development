import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EcommerceDevelopmentPage } from './ecommerce-development.page';

const routes: Routes = [
  {
    path: '',
    component: EcommerceDevelopmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EcommerceDevelopmentPage]
})
export class EcommerceDevelopmentPageModule {}
