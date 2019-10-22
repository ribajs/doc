import {
  Component,
  Debug,
} from '@ribajs/core';

import template from './icon-preview.component.html';
import { collapseOnUrlBinder } from '@ribajs/bs4/src/binders';

interface IScope {
  src: string;
  sizes: number[];
  colors: string[];
  directions: string[];
}

export class IconPreviewComponent extends Component {

  public static tagName: string = 'rv-icon-preview';

  protected autobind = true;

  static get observedAttributes() {
    return ['src'];
  }

  protected debug = Debug('component:' + IconPreviewComponent.tagName);

  protected scope: IScope = {
    src: '',
    sizes: [96, 88, 80, 72, 64, 56, 48, 40, 32, 24, 16, 8],
    colors: [
      'black', 'white', 'primary', 'success', 'info', 'warning', 'danger',
      'stroke-black', 'stroke-white', 'stroke-primary', 'stroke-success', 'stroke-info', 'stroke-warning', 'stroke-danger',
    ],
    directions: ['left', 'left-up', 'up', 'up-right', 'right', 'right-down', 'down', 'down-left'],
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.debug('constructor', this);
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
    this.debug('afterBind', this.scope);
  }

  protected requiredAttributes() {
    return ['src'];
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
