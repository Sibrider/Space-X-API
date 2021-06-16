import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsulesComponent } from './pages/capsules/capsules.component';
import { CapsuleDetailComponent } from './pages/capsule-detail/capsule-detail.component';

const routes: Routes = [
  { path : 'capsules', component : CapsulesComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
