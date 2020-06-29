import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftUpComponent } from './left-up/left-up.component';
import { MidBottomComponent } from './mid-bottom/mid-bottom.component';
import { MidTopComponent } from './mid-top/mid-top.component';
import { FormsModule } from '@angular/forms';
import { RightComponent } from './right/right.component';
import { RightBottomComponent } from './right-bottom/right-bottom.component';
import { RightTopComponent } from './right-top/right-top.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftUpComponent,
    MidBottomComponent,
    MidTopComponent,
    RightComponent,
    RightBottomComponent,
    RightTopComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
