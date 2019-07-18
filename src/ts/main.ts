import {
  Riba,
  View,
  Debug,
  JQuery,
  coreModule,
} from '@ribajs/core';
import shopifyModule from '@ribajs/shopify';
import routerModule from '@ribajs/router';
import { i18nModule } from '@ribajs/i18n';
import { bs4Module } from '@ribajs/bs4';
import { LocalesService } from '@ribajs/shopify-tda';

export class Main {

  private view: View;
  private debug = Debug('app:main');
  private riba = new Riba();
  private localesService = new LocalesService();

  constructor() {
    this.riba.module.regist(coreModule);
    this.riba.module.regist(routerModule);
    this.riba.module.regist(shopifyModule);
    this.riba.module.regist(i18nModule(this.localesService));
    this.riba.module.regist(bs4Module);

    // window.model.system.shopify = (window as any).Shopify;

    this.view = this.riba.bind(JQuery('body')[0], window.model);
  }
}

JQuery(($: JQueryStatic) => {
  const main = new Main();
});
