import { Component } from '@angular/core';

import { Demos } from '../demos/controller';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Demos;
  tab3Root = ContactPage;

  constructor() {

  }
}
