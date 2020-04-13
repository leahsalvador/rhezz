import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor() {
      //const browser = this.iab.create('https://rhezz.com/');

      //browser.executeScript(...);

      //browser.insertCSS(...);
      /*browser.on('loadstop').subscribe(event => {
        browser.insertCSS({ code: "body{color: red;" });
      });//*/

      //browser.close();
      //this.runBrowser();
  }

  async runBrowser(){ 
    await Browser.open({ url: 'https://rhezz.com/' });
  }

}
