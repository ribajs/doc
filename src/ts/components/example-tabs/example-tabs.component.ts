import {
  Bs4TabsComponent,
  Tab,
  Scope as OriginalScope,
} from '@ribajs/bs4/src/components/bs4-tabs/bs4-tabs.component';

import { Utils } from '@ribajs/core';

import * as Prism from 'prismjs';

import template from './example-tabs.component.html';

export interface Scope extends OriginalScope {
  sum?: ExampleBs4TabsComponent['sum'];
}

export class ExampleBs4TabsComponent extends Bs4TabsComponent {

  public static tagName: string = 'rv-example-tabs';

  protected autobind = true;

  static get observedAttributes() {
    return [
      'option-tabs-auto-height',
      'handle',
    ];
  }

  constructor(element?: HTMLElement) {
    super(element);
    // sum is used for examples
    (this.scope as any).sum = this.sum;
    this.init(ExampleBs4TabsComponent.observedAttributes);
  }

  /**
   * Method used in examples
   * @param a
   * @param b
   */
  public sum(a: number, b: number) {
    (this.scope as any).result = Number(a) + Number(b);
    return (this.scope as any).result;
  }

  public activate(tab: Tab, binding?: any, event?: Event) {
    super.activate(tab, binding, event);
    if (tab.type === 'realtime-result') {
      const previewElement = this.el.querySelector('.tab-content-preview');
      if (previewElement) {
        tab.content = `<pre class="language-html"><code class="language-html">${Utils.escapeHtml(previewElement.innerHTML.trim())}</code></pre>`;
        Prism.highlightAll();
      }
    }
  }

  protected async afterBind() {
    super.afterBind();
    Prism.highlightAll();
  }

  protected countOfFirstWhitespaces(str: string) {
    const match = str.match(/^([\s]+)/s);
    return match ? match[0].length : 0;
  }

  /**
   * Removes the first indents of a source string based on the first indents until the first character was found
   * @param source
   */
  protected removeIndentsOfSource(source: string) {
    const lines = source.split(/\r?\n/);
    let firstLineIndents = this.countOfFirstWhitespaces(lines[0]);
    // If the first lines contains only whitespaces
    while (firstLineIndents === lines[0].length) {
      lines.shift();
      firstLineIndents = this.countOfFirstWhitespaces(lines[0]);
    }

    if (firstLineIndents !== 0) {
      for (let i = 0; i < lines.length; i++) {
        const currentIndents = this.countOfFirstWhitespaces(lines[i]);
        if (currentIndents >= firstLineIndents) {
          lines[i] = lines[i].substring(firstLineIndents);
        }
      }
    }

    return lines.join('\n').trim();
  }

  protected addTabsByTemplate() {
    const templates = this.el.querySelectorAll<HTMLTemplateElement>('template');
    templates.forEach((tpl) => {
      const type = tpl.getAttribute('type');
      if (type === 'single-html-file') {
        const sourceTemplate = document.createElement('template');
        const sourceCode = this.removeIndentsOfSource(tpl.innerHTML);
        sourceTemplate.setAttribute('title', 'Source');
        sourceTemplate.setAttribute('type', 'source');
        sourceTemplate.innerHTML = `<pre class="language-html"><code class="language-html">${Utils.escapeHtml(sourceCode)}</code></pre>`;
        this.addTabByTemplate(sourceTemplate);

        const previewTemplate = document.createElement('template');
        previewTemplate.setAttribute('title', 'Preview');
        previewTemplate.setAttribute('type', 'preview');
        previewTemplate.innerHTML = sourceCode;
        this.addTabByTemplate(previewTemplate);

        const resultTemplate = document.createElement('template');
        resultTemplate.setAttribute('title', 'Rendered');
        resultTemplate.setAttribute('type', 'realtime-result');
        resultTemplate.innerHTML = '';
        this.addTabByTemplate(resultTemplate);
      } else {
        this.addTabByTemplate(tpl);
      }
    });
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
