import {
  Debug,
} from '@ribajs/core';

import {
  TabsComponent
} from '@ribajs/bs4/src/components/tabs/tabs.component';

import * as Prism from 'prismjs';

import template from './example-tabs.component.html';

export class ExampleTabsComponent extends TabsComponent {

  public static tagName: string = 'rv-example-tabs';

  protected autobind = true;

  protected debug = Debug('component:' + ExampleTabsComponent.tagName);


  constructor(element?: HTMLElement) {
    super(element);
    this.init(ExampleTabsComponent.observedAttributes);
  }

  protected requiredAttributes() {
    return [
      // TODO fix each-item example component binding
      // 'tab0Title', 'tab0Content', 'tab0Handle',
      // 'tab1Title', 'tab1Content', 'tab1Handle',
      // 'tab2Title', 'tab2Content', 'tab2Handle',
    ];
  }

  protected async afterBind() {
    super.afterBind();
    Prism.highlightAll();
  }

  protected template() {
    // Only set the component template if there no childs already
    if (this.el.hasChildNodes()) {
      this.debug('Do not use template, because element has child nodes');
      return null;
    } else {
      this.debug('Use template', template);
      return template;
    }
  }
}
