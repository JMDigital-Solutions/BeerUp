import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuItemModel } from '../../models/menu-item.model';
import { EventsPage, FavoritesPage, NotesPage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tabs: MenuItemModel[];
  public rootPage = EventsPage;

  constructor(public navCtrl: NavController) {
    this.tabs = [
      { Title: 'Eventos', Page: EventsPage, Icon: 'people' },
      { Title: 'Favoritos', Page: FavoritesPage, Icon: 'heart' },
      { Title: 'Notas', Page: NotesPage, Icon: 'bookmark' },
    ]
  }

}
