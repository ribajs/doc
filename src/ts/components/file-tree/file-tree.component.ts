import {
  Component,
  Debug,
} from '@ribajs/core';

import template from './file-tree.component.html';

interface IScope {
  hello?: string;
}

export class FileTreeComponent extends Component {

  public static tagName: string = 'rv-file-tree';

  protected autobind = false;

  static get observedAttributes() {
    return [];
  }

  protected debug = Debug('component:' + FileTreeComponent.tagName);

  protected scope: IScope = {};

  constructor(element?: HTMLElement) {
    super(element);
    this.debug('constructor', this);
    this.init(FileTreeComponent.observedAttributes);
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
