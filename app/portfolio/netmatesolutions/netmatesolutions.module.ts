import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NetmatesolutionsPage } from './netmatesolutions.page';

const routes: Routes = [
  {
    path: '',
    component: NetmatesolutionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NetmatesolutionsPage]
})
export class NetmatesolutionsPageModule {}
