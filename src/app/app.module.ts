import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketsComponent } from "./pages/rockets/rockets.component";
import { RocketsService } from "./services/rockets/rockets.service";
import { HttpClientModule } from '@angular/common/http';
import { LaunchesComponent } from './pages/launches/launches.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CapsulesComponent } from './pages/capsules/capsules.component';
import { CapsulesService } from './services/capsules/capsules.service';

@NgModule({
  declarations: [
    AppComponent,
    RocketsComponent,
    LaunchesComponent,
    CapsulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    RocketsService,
    CapsulesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
