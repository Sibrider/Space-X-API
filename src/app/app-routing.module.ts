import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { LaunchesComponent } from './pages/launches/launches.component';
import { CapsulesComponent } from './pages/capsules/capsules.component';

const routes: Routes = [
  {
    path: "rockets",
    component: RocketsComponent
  },
  {
    path: 'launches',
    component: LaunchesComponent
  },
  {
    path: 'capsules',
    component: CapsulesComponent
  }
  ,
  {
    path: "",
    pathMatch: "full",
    redirectTo: "launches"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
