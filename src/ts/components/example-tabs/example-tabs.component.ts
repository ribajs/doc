import {
  Debug,
  Utils,
} from '@ribajs/core';

import {
  TabsComponent,
} from '@ribajs/bs4/src/components/tabs/tabs.component';

import * as Prism from 'prismjs';

import template from './example-tabs.component.html';

export class ExampleTabsComponent extends TabsComponent {

  public static tagName: string = 'rv-example-tabs';

  protected autobind = true;

  protected debug = Debug('component:' + ExampleTabsComponent.tagName);

  constructor(element?: HTMLElement) {
    super(element);
    this.setCodeContentOfTabs();
    this.init(ExampleTabsComponent.observedAttributes);
  }

  protected requiredAttributes() {
    return [
      // TODO fix each-item example component binding
      // 'tab0Title', 'tab0Content', 'tab0Handle',
      // 'tab1Title', 'tab1Content', 'tab1Handle',
      // 'tab2Title', 'tab2Content', 'tab2Handle',
      // 'tab3Title', 'tab3Content', 'tab3Handle',
    ];
  }

  protected async afterBind() {
    super.afterBind();
    Prism.highlightAll();
  }

  protected setCodeContentOfTabs() {
    for (const tab of this.scope.tabs) {
      if (tab.title.endsWith('.ts')) {
        tab.content = `<pre class="language-typescript"><code class="language-typescript">${tab.content}</code></pre>`;
      }
      if (tab.title.endsWith('.html')) {
        tab.content = `<pre class="language-html"><code class="language-html">${Utils.escapeHtml(tab.content)}</code></pre>`;
      }
      if (tab.title.endsWith('.scss')) {
        tab.content = `<pre class="language-scss"><code class="language-scss">${tab.content}</code></pre>`;
      }
      if (tab.title.endsWith('.js')) {
        tab.content = `<pre class="language-javascript"><code class="language-javascript">${tab.content}</code></pre>`;
      }
      if (tab.title.endsWith('.pug')) {
        tab.content = `<pre class="language-pug"><code class="language-pug">${tab.content}</code></pre>`;
      }
    }
  }

  protected template() {
    // Only set the component template if there no childs or the childs are templates
    if (!this.el.hasChildNodes() || this.onlyTemplateChilds()) {
      this.debug('Use template', template);
      return template;
    } else {
      this.debug('Do not use template, because element has child nodes');
      return null;
    }
  }
}
