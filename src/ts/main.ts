import {
  Riba,
  JQuery,
  coreModule,
  EventDispatcher,
} from '@ribajs/core';
import shopifyModule from '@ribajs/shopify';
import routerModule from '@ribajs/router';
// import { i18nModule } from '@ribajs/i18n';
import { bs4Module } from '@ribajs/bs4';
// import { LocalesService } from '@ribajs/shopify-tda';

import * as CustomComponents from './components';

import * as Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

export class Main {

  private riba = new Riba();

  private dispatcher = new EventDispatcher('main');

  constructor() {
    this.riba.module.regist(coreModule);
    this.riba.module.regist(routerModule);
    // this.riba.module.regist(shopifyModule);
    // this.riba.module.regist(i18nModule(this.localesService));
    this.riba.module.regist(bs4Module);

    // Regist custom components
    this.riba.module.regist({
      components: CustomComponents,
      // binders: {...customBinders},
    });

    this.dispatcher.on('newPageReady', () => {
      Prism.highlightAll();
    });

    // window.model.system.shopify = (window as any).Shopify;
    this.riba.bind(JQuery('body')[0], window.model);
  }
}

JQuery(($: JQueryStatic) => {
  const main = new Main();
});
