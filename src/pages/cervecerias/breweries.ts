import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BreweryPage } from '../pages';
import { BreweryModel } from '../../models/brewery.model';

@Component({
	selector: 'page-breweries',
	templateUrl: 'breweries.html',
})
export class BreweriesPage {

	public breweries: BreweryModel[] = [
		{ Id: 1, Name: 'Beer Up' },
		{ Id: 2, Name: 'La Fabrica de don Juan' },
		{ Id: 3, Name: 'Just Beer' },
		{ Id: 4, Name: 'Always ABeerto' },
	];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() { }

	openBreweryPage(event: Event, brewery: BreweryModel) {
		event.stopPropagation();
		this.navCtrl.push(BreweryPage, brewery);
	}
}
