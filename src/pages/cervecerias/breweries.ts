import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BreweryPage } from '../pages';

@Component({
	selector: 'page-breweries',
	templateUrl: 'breweries.html',
})
export class BreweriesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() { }

	openBreweryPage(event: Event) {
		event.stopPropagation();
		this.navCtrl.push(BreweryPage);
	}
}
