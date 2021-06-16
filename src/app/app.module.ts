import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapsulesComponent } from './pages/capsules/capsules.component';
import { CapsuleDetailComponent } from './pages/capsule-detail/capsule-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CapsulesComponent,
    CapsuleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
