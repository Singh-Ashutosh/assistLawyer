import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LawActRoutingModule, LawActComponents } from './lawAct-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LawActRoutingModule],
  declarations: LawActComponents
})
export class LawActModule {
  constructor() {
  }
}
