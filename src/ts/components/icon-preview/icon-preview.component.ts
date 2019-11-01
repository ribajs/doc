import {
  Component,
  Debug,
  Utils,
} from '@ribajs/core';

import template from './icon-preview.component.html';

import * as Prism from 'prismjs';

interface IScope {
  assetPath: string;
  name: string;
  src: string;
  sizes: number[];
  colors: string[];
  directions: string[];
  example: string;
}

export class IconPreviewComponent extends Component {

  public static tagName: string = 'rv-icon-preview';

  protected autobind = true;

  static get observedAttributes() {
    return ['asset-path'];
  }

  protected debug = Debug('component:' + IconPreviewComponent.tagName);

  protected scope: IScope = {
    assetPath: '',
    name: '',
    src: '',
    sizes: [96, 88, 80, 72, 64, 56, 48, 40, 32, 24, 16, 8],
    colors: [
      'black', 'white', 'primary', 'success', 'info', 'warning', 'danger',
      'stroke-black', 'stroke-white', 'stroke-primary', 'stroke-success', 'stroke-info', 'stroke-warning', 'stroke-danger',
    ],
    directions: ['left', 'left-up', 'up', 'up-right', 'right', 'right-down', 'down', 'down-left'],
    example: 'string',
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.debug('constructor', this);
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (!name) {
      throw new Error('Query url parameter "name" is required!');
    }
    this.scope.name = name;
    this.init(IconPreviewComponent.observedAttributes);
  }

  protected async init(observedAttributes: string[]) {
    return super.init(observedAttributes)
    .then((view) => {
      return view;
    });
  }

  protected async beforeBind() {
    this.debug('beforeBind');
  }

  protected async afterBind() {
    super.afterBind();
    Prism.highlightAll();
  }

  protected parsedAttributeChangedCallback(attributeName: string, oldValue: any, newValue: any, namespace: string | null) {
    super.parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace);
    if (attributeName === 'assetPath') {
      const urlParts = this.scope.assetPath.split('?');
      this.scope.assetPath = urlParts[0];
      const cacheQueryParam = urlParts[1];
      this.scope.src = this.scope.assetPath += this.scope.name + '.svg?' + cacheQueryParam;

      this.scope.example = Utils.escapeHtml(`
        <bs4-icon color="danger" src="/assets/${this.scope.name + '.svg'}" size="32" direction="up"></bs4-icon>
      `.trim());
    }
  }

  protected requiredAttributes() {
    return ['assetPath', 'src'];
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