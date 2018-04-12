import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponents } from '../../shared/shared.module';
import { CKEditorModule } from 'ngx-ckeditor';


import { LawSectionRoutingModule, LawSectionComponents } from './lawSection-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LawSectionRoutingModule, CKEditorModule],
  declarations: [LawSectionComponents, SharedComponents]
})
export class LawSectionModule {
  constructor() {
  }
}
