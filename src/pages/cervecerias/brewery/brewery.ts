import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuItemModel } from '../../../models/menu-item.model';
import { BreweryHomePage, BreweryMenuPage, BreweryCommentsPage } from '../../pages';
import { BreweryModel } from '../../../models/brewery.model';

@Component({
	selector: 'page-brewery',
	templateUrl: 'brewery.html',
})
export class BreweryPage {

	public tabs: MenuItemModel[];
	public rootPage = BreweryHomePage;
	public brewery: BreweryModel = {};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.tabs = [
			{ Title: 'Inicio', Page: BreweryHomePage, Icon: 'information-circle' },
			{ Title: 'Menu', Page: BreweryMenuPage, Icon: 'nutrition' },
			{ Title: 'Comentarios', Page: BreweryCommentsPage, Icon: 'megaphone' },
		]

		this.brewery = this.navParams.data;
	}

	ionViewDidLoad() { }

}
