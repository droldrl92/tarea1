import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html'
})
export class Pagina2Page {

  personaje : any = {};
  constructor(private navCtrl: NavController,
              private navParams: NavParams) {
      this.personaje = this.navParams.get("personaje");
      console.log(this.personaje);
  }

}
