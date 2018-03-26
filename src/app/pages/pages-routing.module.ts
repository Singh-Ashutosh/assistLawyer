import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'lawAct', loadChildren: './lawAct/lawAct.module#LawActModule' },
  //   { path: "products", loadChildren: "./products/products.module#ProductsModule" },
  //   { path: "brands", loadChildren: "./brands/brands.module#BrandsModule" },
  //   { path: "contact", loadChildren: "./contact/contact.module#ContactModule" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class PagesRoutingModule {
  constructor() {
    console.log('page routing');
  }
}
