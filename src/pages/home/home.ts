import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PERSONAJES } from "../../personajes.data";
import { Pagina2Page } from "../index.pages";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pagina2 : any = Pagina2Page;
  personajes : any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.personajes = PERSONAJES.slice(0);
      console.log(this.personajes);
  }

}
