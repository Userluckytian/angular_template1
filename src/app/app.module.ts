import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewModule } from './overview/overview.module';
import { BoxmapModule } from './boxmap/boxmap.module';


@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverviewModule,
    BoxmapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
