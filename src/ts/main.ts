import { Riba, coreModule, View } from "@ribajs/core";
import { EventDispatcher } from "@ribajs/events";
import { ready } from "@ribajs/utils/src/index.js";
import { extrasModule } from "@ribajs/extras";
import type { State } from "@ribajs/history/src/index.js";
import { shopifyModule } from "@ribajs/shopify";
import { routerModule } from "@ribajs/router";
import { i18nModule } from "@ribajs/i18n";
import { bs4Module } from "@ribajs/bs4";
import { LocalesService } from "@ribajs/shopify-tda";

import * as CustomComponents from "./components/index.js";

// Examples
import { EachItemExampleComponent } from "./demos/core-each-item/src/ts/components/each-item-example/each-item-example.component.js";
import { Bs4TabsAttrExampleComponent } from "./demos/bs4-tabs-attr/src/ts/components/bs4-tabs-attr-example/bs4-tabs-attr-example.component.js";
import { Bs4TabsTplExampleComponent } from "./demos/bs4-tabs-tpl/src/ts/components/bs4-tabs-tpl-example/bs4-tabs-tpl-example.component.js";
import { I18nStaticExampleComponent } from "./demos/i18n-static/src/ts/components/i18n-static-example/i18n-static-example.component.js";
import { TouchEventsExampleComponent } from "./demos/extras-touch-events/src/ts/components/touch-events-example/touch-events-example.component.js";
import { ExtrasScrollEventsExampleComponent } from "./demos/extras-scroll-events/src/ts/components/extras-scroll-events-example/extras-scroll-events-example.component.js";

import * as Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-scss";

export class Main {
  private riba = new Riba();
  private view?: View;

  private dispatcher = new EventDispatcher("main");

  private localesService = LocalesService.getSingleton();

  protected onPageReady(
    viewId: string,
    currentStatus: State,
    prevStatus: State,
    container: HTMLElement,
    newPageRawHTML: string,
    dataset: any
    // isInit: boolean
  ) {
    Prism.highlightAll();
    if (this.view) {
      this.view.models.dataset = dataset;
    }
  }

  constructor() {
    this.riba.module.register(coreModule.init());
    this.riba.module.register(extrasModule.init());
    this.riba.module.register(routerModule.init());
    this.riba.module.register(shopifyModule.init());
    this.riba.module.register(
      i18nModule.init({ localesService: this.localesService })
    );
    this.riba.module.register(bs4Module.init());

    // Register custom components
    this.riba.module.component.regists(CustomComponents);

    // Regist examples‚
    this.riba.module.component.regists({
      EachItemExampleComponent,
      Bs4TabsAttrExampleComponent,
      Bs4TabsTplExampleComponent,
      I18nStaticExampleComponent,
      TouchEventsExampleComponent,
      ExtrasScrollEventsExampleComponent,
    });

    this.dispatcher.on("newPageReady", this.onPageReady, this);

    window.model = window.model || {};
    window.model.dataset = window.model.dataset || {};

    this.view = this.riba.bind(document.body, window.model);
    // view.registComponents();
  }
}

ready(() => {
  new Main();
});
