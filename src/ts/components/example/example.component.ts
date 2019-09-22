import {
  Component,
  Debug,
  Utils,
} from '@ribajs/core';

import template from './example.component.html';

interface Tab {
  title: string;
  content: string;
  handle: string;
}

interface IScope {
  tabs: {
    html?: Tab,
    script?: Tab,
    result?: Tab,
  }
}

export class ExampleComponent extends Component {

  public static tagName: string = 'rv-example';

  protected autobind = true;

  protected htmlTemplate: HTMLTemplateElement | null = null;
  protected scriptTemplate: HTMLTemplateElement | null  = null;
  protected resultTemplate: HTMLTemplateElement | null  = null;

  static get observedAttributes() {
    return [];
  }

  protected debug = Debug('component:' + ExampleComponent.tagName);

  protected scope: IScope = {
    tabs: {},
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.debug('constructor', this);

    this.htmlTemplate = this.el.querySelector<HTMLTemplateElement>('template[name="html"]');
    this.scriptTemplate = this.el.querySelector<HTMLTemplateElement>('template[name="script"]');
    this.resultTemplate = this.el.querySelector<HTMLTemplateElement>('template[name="result"]');


    if (this.htmlTemplate && this.htmlTemplate.innerHTML) {
      this.scope.tabs.html = {
        title: 'HTML',
        content: `<pre class="language-html"><code class="language-html">${Utils.escapeHtml(this.htmlTemplate.innerHTML)}</code></pre>`,
        handle: 'html',
      };
    }
    if (this.scriptTemplate && this.scriptTemplate.innerHTML) {
      this.scope.tabs.script = {
        title: 'TypeScript',
        content: `<pre class="language-typescript"><code class="language-typescript">${this.scriptTemplate.innerHTML}</code></pre>`,
        handle: 'script',
      };
    }
    if (this.resultTemplate && this.resultTemplate.innerHTML) {
      this.scope.tabs.result = {
        title: 'Result',
        content: this.resultTemplate.innerHTML,
        handle: 'result',
      };
    }

    this.init(ExampleComponent.observedAttributes);
  }

  protected async init(observedAttributes: string[]) {
    return super.init(observedAttributes)
    .then((view) => {
      return view;
    });
  }

  protected async beforeBind() {
    this.debug('beforeBind', this.scope);
  }

  protected async afterBind() {
    this.debug('afterBind', this.scope);
  }

  protected requiredAttributes() {
    return [];
  }

  protected attributeChangedCallback(attributeName: string, oldValue: any, newValue: any, namespace: string | null) {
    super.attributeChangedCallback(attributeName, oldValue, newValue, namespace);
  }

  // deconstructor
  protected disconnectedCallback() {
    super.disconnectedCallback();
  }

  protected template() {
    this.debug('Use template', template);
    return template;
  }
}
