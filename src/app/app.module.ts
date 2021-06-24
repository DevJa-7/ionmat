import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbService } from './services/db.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { ModalmapComponent } from './maps/components/modalmap/modalmap.component';

@NgModule({
  declarations: [AppComponent, ModalmapComponent],
  entryComponents: [ModalmapComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot({
      mode: 'md'
    }),
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DbService),
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
