import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WordpressDevelopmentPage } from './wordpress-development.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressDevelopmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WordpressDevelopmentPage]
})
export class WordpressDevelopmentPageModule {}
