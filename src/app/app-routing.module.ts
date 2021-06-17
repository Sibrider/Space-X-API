import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsulesComponent } from './pages/capsules/capsules.component';

const routes: Routes = [
  { path : 'capsules', component : CapsulesComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
