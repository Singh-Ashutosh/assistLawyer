import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'lawAct', loadChildren: './lawAct/lawAct.module#LawActModule' },
  { path: 'lawChapter', loadChildren: './lawChapter/lawChapter.module#LawChapterModule' },
  { path: 'lawSection', loadChildren: './lawSection/lawSection.module#LawSectionModule' },
  { path: 'lawDivision', loadChildren: './lawDivision/lawDivision.module#LawDivisionModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class PagesRoutingModule {
  constructor() {
  }
}
