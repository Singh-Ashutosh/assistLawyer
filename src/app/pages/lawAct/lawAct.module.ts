import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawActRoutingModule, LawActComponents } from './lawAct-routing.module';

@NgModule({
  imports: [CommonModule, LawActRoutingModule],
  declarations: LawActComponents
})
export class LawActModule {
  constructor() {
    console.log('Law Act module');
  }
}
