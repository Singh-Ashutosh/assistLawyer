import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { AssistHeader } from './assist-header/assist-header.component';
import { AssistFooter } from './assist-footer/assist-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AssistHeader,
    AssistFooter
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PagesModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, AssistHeader, AssistFooter]
})
export class AppModule {
  constructor(router: Router) { }
}
