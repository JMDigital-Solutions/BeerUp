import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuItemModel } from '../../../models/MenuItemModel';
import { BreweryHomePage, BreweryMenuPage, BreweryCommentsPage } from '../../pages';

@Component({
	selector: 'page-brewery',
	templateUrl: 'brewery.html',
})
export class BreweryPage {

	public tabs: MenuItemModel[];
	public rootPage = BreweryHomePage;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.tabs = [
			{ Title: 'Inicio', Page: BreweryHomePage, Icon: 'information-circle' },
			{ Title: 'Menu', Page: BreweryMenuPage, Icon: 'nutrition' },
			{ Title: 'Comments', Page: BreweryCommentsPage, Icon: 'megaphone' },
		]
	}

	ionViewDidLoad() { }

}
