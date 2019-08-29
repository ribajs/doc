import {
  Component,
  Debug,
  EventDispatcher,
} from '@ribajs/core';

import pugTemplate from './bs4-sidebar.component.pug';

type State = 'overlay-left' | 'overlay-right' | 'side-left' | 'side-right' | 'hidden';

interface IScope {
  containerSelector?: string;
  state: State;
  hide: Bs4SidebarComponent['hide'];
  toggle: Bs4SidebarComponent['toggle'];
  id?: string;
}

export class Bs4SidebarComponent extends Component {

  public static tagName: string = 'bs4-sidebar';

  protected autobind = true;

  static get observedAttributes() {
    return ['container-selector', 'id'];
  }

  protected toggleButtonEvents = new EventDispatcher('bs4-toggle-button');

  protected debug = Debug('component:' + Bs4SidebarComponent.tagName);

  protected scope: IScope = {
    containerSelector: undefined,
    state: 'side-left',
    hide: this.hide,
    toggle: this.toggle,
    id: undefined,
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.debug('constructor', this);
    this.init(Bs4SidebarComponent.observedAttributes);
    this.toggleButtonEvents.on('toggle', (targetId: string) => {
      this.debug('toggle targetId', targetId);
      if (targetId === this.scope.id) {
        this.toggle();
      }
    });
  }

  public setState(state: State) {
    this.scope.state = state;
  }

  public getState() {
    return this.scope.state;
  }

  public hide() {
    this.scope.state = 'hidden';
    this.onStateChange();
  }

  public show() {
    this.scope.state = 'side-left';
    this.onStateChange();
  }

  public toggle() {
    if (this.scope.state === 'hidden') {
      this.show();
    } else {
      this.hide();
    }
  }

  protected onSide(directon: State) {
    if (this.scope.containerSelector) {
      const containers = document.querySelectorAll<HTMLDivElement>(this.scope.containerSelector);
      for (const container of containers) {
        const width = this.width;
        const conStyle = window.getComputedStyle(container);
        if (directon === 'side-left') {
          switch (conStyle.position) {
            case 'fixed':
              container.style.left = width + 'px';
              break;
            default:
              container.style.marginLeft = width + 'px';
              break;
          }
        } else {
          switch (conStyle.position) {
            case 'fixed':
              container.style.right = width + 'px';
              break;
            default:
              container.style.marginRight = width + 'px';
              break;
          }
        }
      }
    }
    this.el.style.transform = 'translateX(0)';
  }

  protected onHidden() {
    if (this.scope.containerSelector) {
      const containers = document.querySelectorAll<HTMLDivElement>(this.scope.containerSelector);
      for (const container of containers) {
        const conStyle = window.getComputedStyle(container);
        switch (conStyle.position) {
          case 'fixed':
            container.style.left = '';
            break;
          default:
            container.style.marginLeft = '';
            break;
        }
      }
    }
    this.el.style.transform = 'translateX(-100%)';
  }

  protected onOverlay(directon: State) {
    //
  }

  protected onStateChange() {
    this.debug('state changed: ' + this.scope.state);
    if (this.scope.state === 'side-left' || this.scope.state === 'side-right') {
      this.onSide(this.scope.state);
    }
    if (this.scope.state === 'hidden') {
      this.onHidden();
    }
    if (this.scope.state === 'overlay-left'  || this.scope.state === 'overlay-right') {
      this.onOverlay(this.scope.state);
    }
    this.toggleButtonEvents.trigger('toggled', this.scope.state);
  }

  protected get width() {
    return this.el.offsetWidth;
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
    this.onStateChange();
  }

  protected requiredAttributes() {
    return [];
  }

  protected attributeChangedCallback(attributeName: string, oldValue: any, newValue: any, namespace: string | null) {
    super.attributeChangedCallback(attributeName, oldValue, newValue, namespace);
    if (attributeName === 'containerSelector') {
      this.onStateChange();
    }
  }

  // deconstructor
  protected disconnectedCallback() {
    super.disconnectedCallback();
  }

  protected template() {
    // Only set the component template if there no childs already
    if (this.el.hasChildNodes()) {
      this.debug('Do not use template, because element has child nodes');
      return null;
    } else {
      const template = pugTemplate(this.scope);
      this.debug('Use template', template);
      return template;
    }
  }
}
