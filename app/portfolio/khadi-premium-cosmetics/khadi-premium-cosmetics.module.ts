import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KhadiPremiumCosmeticsPage } from './khadi-premium-cosmetics.page';

const routes: Routes = [
  {
    path: '',
    component: KhadiPremiumCosmeticsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KhadiPremiumCosmeticsPage]
})
export class KhadiPremiumCosmeticsPageModule {}
