import {
  TabsComponent,
} from '@ribajs/bs4/src/components/tabs/tabs.component';

import * as Prism from 'prismjs';

import template from './example-tabs.component.html';

export class ExampleTabsComponent extends TabsComponent {

  public static tagName: string = 'rv-example-tabs';

  protected autobind = true;

  constructor(element?: HTMLElement) {
    super(element);
    this.init(ExampleTabsComponent.observedAttributes);
  }

  protected async afterBind() {
    super.afterBind();
    Prism.highlightAll();
  }

  protected template() {
    // Only set the component template if there no childs or the childs are templates
    if (!this.el.hasChildNodes() || this.onlyTemplateChilds()) {
      return template;
    } else {
      return null;
    }
  }
}
