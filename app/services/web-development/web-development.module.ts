import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WebDevelopmentPage } from './web-development.page';

const routes: Routes = [
  {
    path: '',
    component: WebDevelopmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WebDevelopmentPage]
})
export class WebDevelopmentPageModule {}
