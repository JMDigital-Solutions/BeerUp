import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, BeersPage, NotesPage, BreweriesPage, BreweryPage, FavoritesPage, EventsPage, BreweryCommentsPage, BreweryHomePage, BreweryMenuPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BeersPage,
    NotesPage,
    BreweriesPage,
    BreweryPage,
    FavoritesPage,
	EventsPage,
	BreweryCommentsPage,
	BreweryHomePage,
	BreweryMenuPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeersPage,
    NotesPage,
    BreweriesPage,
    BreweryPage,
    FavoritesPage,
	EventsPage,
	BreweryCommentsPage,
	BreweryHomePage,
	BreweryMenuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
