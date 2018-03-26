import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './';

const routes: Routes = [
  { path: '', component: HomePage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  constructor() {
    console.log('Home Routing');
  }
}

export const HomeComponents = [HomePage];
