import {
  Component,
  Debug,
} from '@ribajs/core';

import template from './example.component.html';
import { TemplateElement } from 'babel-types';

interface IScope {
  html: string | null;
  typescript: string | null;
  result: string | null;
  test: string;
}

export class ExampleComponent extends Component {

  public static tagName: string = 'rv-example';

  protected autobind = true;

  protected htmlTemplate: HTMLTemplateElement | null = null;
  protected typescriptTemplate: HTMLTemplateElement | null  = null;
  protected resultTemplate: HTMLTemplateElement | null  = null;

  static get observedAttributes() {
    return [];
  }

  protected debug = Debug('component:' + ExampleComponent.tagName);

  protected scope: IScope = {
    html: null,
    typescript: null,
    result: null,
    test: 'hello',
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.debug('constructor', this);

    this.htmlTemplate = this.el.querySelector<HTMLTemplateElement>('template[name="html"]');
    this.typescriptTemplate = this.el.querySelector<HTMLTemplateElement>('template[name="typescript"]');
    this.resultTemplate = this.el.querySelector<HTMLTemplateElement>('template[name="result"]');

    if (this.htmlTemplate) {
      this.scope.html = this.htmlTemplate.innerHTML;
    }
    if (this.typescriptTemplate) {
      this.scope.typescript = this.typescriptTemplate.innerHTML;
    }
    if (this.resultTemplate) {
      this.scope.result = this.resultTemplate.innerHTML;
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
