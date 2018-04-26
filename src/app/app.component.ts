import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuItemModel } from '../models/menu-item.model';
import { MenuSectionModel } from '../models/menu-section.model';
import { HomePage, EventsPage, FavoritesPage, NotesPage, BreweriesPage, BeersPage } from '../pages/pages';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;
	sideMenu: MenuSectionModel[];

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.sideMenu = [
			{
				Name: 'Inicio', MenuItems: [
					{ Title: 'Inicio', Page: HomePage, Icon: 'home' },
				]
			},
			{
				Name: 'Cervecerias', MenuItems: [
					{ Title: 'Cervecerias', Page: BreweriesPage, Icon: 'pint' },
					{ Title: 'Cervezas', Page: BeersPage, Icon: 'beer' },
				]
			}
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page: Object) {
		if (this.rootPage !== page) {
			this.rootPage = page;
		}
	}
}
