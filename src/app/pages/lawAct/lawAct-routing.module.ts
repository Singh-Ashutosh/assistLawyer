import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawActPage } from './';

const routes: Routes = [
  { path: '/', component: LawActPage, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawActRoutingModule {
  constructor() {
    console.log('Law Act Routing');
  }
}

export const LawActComponents = [LawActPage];
