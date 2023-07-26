import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewrecComponent } from './viewrec/viewrec.component';

const routes: Routes = [
  { path: 'viewrec', component: ViewrecComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
