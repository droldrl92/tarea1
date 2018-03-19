import { Component } from '@angular/core';

import { HomePage, Tab2Page, Tab3Page } from "../index.pages";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage{
  llamadas: any
  mensajes: any
  audio: any

  constructor() {
    this.llamadas = HomePage;
    this.mensajes = Tab2Page;
    this.audio = Tab3Page;
    console.log("Entrando en tabs");
  }

}
