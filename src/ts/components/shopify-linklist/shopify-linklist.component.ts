import Debug from 'debug';
import { Component } from '@ribajs/core';
import template from './shopify-linklist.component.html';

interface ILink {
  active: boolean;
  child_active: boolean;
  handle: string;
  level: number;
  levels: number;
  links: Array<ILink>;
  title: string;
  type: 'page_link';
  url: string;
}

interface ILinklist {
  handle: string;
  id: string | null;
  levels: number;
  links: Array<ILink>;
  title: string;
}

interface IScope {
  linklist?: ILinklist;
}

/**
 * shopify-filter
 */
export class ShopifyLinklistComponent extends Component {

  public static tagName: string = 'shopify-linklist';

  protected debug = Debug('component:' + ShopifyLinklistComponent.tagName);

  static get observedAttributes() {
    return ['name', 'linklist', 'pills', 'vertical'];
  }

  protected scope: IScope = {

  };

  constructor(element?: HTMLElement) {
    super(element);
    this.init(ShopifyLinklistComponent.observedAttributes);
  }

  public attributeChangedCallback(name: string, oldValue: any, newValue: any, namespace: string | null) {
    // injects the changed attributes to scope
    super.attributeChangedCallback(name, oldValue, newValue, namespace);

    // set linklist by name
    if (name === 'name') {
      this.scope.linklist = window.model.system.linklists[newValue];
      this.debug('linklist', this.scope.linklist);
    }
  }

  protected requiredAttributes() {
    return ['linklist'];
  }

  /**
   * Only set the component template if there no childs already
   */
  protected template() {
    if (this.el.hasChildNodes()) {
      return null;
    } else {
      return template;
    }
  }
}
