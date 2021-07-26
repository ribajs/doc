import { Riba, coreModule, EventDispatcher } from "@ribajs/core";
import { ready } from "@ribajs/utils/src/dom";
import { extrasModule } from "@ribajs/extras";
import { shopifyModule } from "@ribajs/shopify";
import { routerModule } from "@ribajs/router";
import { i18nModule } from "@ribajs/i18n";
import { bs4Module } from "@ribajs/bs4";
import { LocalesService } from "@ribajs/shopify-tda";

import * as CustomComponents from "./components";

// Examples
import { EachItemExampleComponent } from "./demos/core-each-item/src/ts/components/each-item-example/each-item-example.component";
import { Bs4TabsAttrExampleComponent } from "./demos/bs4-tabs-attr/src/ts/components/bs4-tabs-attr-example/bs4-tabs-attr-example.component";
import { Bs4TabsTplExampleComponent } from "./demos/bs4-tabs-tpl/src/ts/components/bs4-tabs-tpl-example/bs4-tabs-tpl-example.component";
import { I18nStaticExampleComponent } from "./demos/i18n-static/src/ts/components/i18n-static-example/i18n-static-example.component";
import { TouchEventsExampleComponent } from "./demos/extras-touch-events/src/ts/components/touch-events-example/touch-events-example.component";
import { ExtrasScrollEventsExampleComponent } from "./demos/extras-scroll-events/src/ts/components/extras-scroll-events-example/extras-scroll-events-example.component";

import * as Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-scss";

export class Main {
  private riba = new Riba();

  private dispatcher = new EventDispatcher("main");

  private localesService = LocalesService.getInstance();

  constructor() {
    this.riba.module.regist(coreModule.init());
    this.riba.module.regist(extrasModule.init());
    this.riba.module.regist(routerModule.init());
    this.riba.module.regist(shopifyModule.init());
    this.riba.module.regist(
      i18nModule.init({ localesService: this.localesService })
    );
    this.riba.module.regist(bs4Module.init());

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

    this.dispatcher.on("newPageReady", () => {
      Prism.highlightAll();
    });

    this.riba.bind(document.body, window.model);
    // view.registComponents();
  }
}

ready(() => {
  new Main();
});
