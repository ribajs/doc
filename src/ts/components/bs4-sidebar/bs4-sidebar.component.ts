import {
  Component,
  Debug,
  EventDispatcher,
  Utils,
} from '@ribajs/core';

import pugTemplate from './bs4-sidebar.component.pug';

type State = 'overlay-left' | 'overlay-right' | 'side-left' | 'side-right' | 'hidden';

interface IScope {
  containerSelector?: string;
  state: State;
  hide: Bs4SidebarComponent['hide'];
  toggle: Bs4SidebarComponent['toggle'];
  id?: string;
  options: {
    position: 'left' | 'right',
    autoShowOnWiderThan: number;
    autoHideOnSlimmerThan: number;
    autoHideOnPathnames: Array<string>;
    overlayOnSlimmerThan: number;
  };
}

export class Bs4SidebarComponent extends Component {

  public static tagName: string = 'bs4-sidebar';

  protected containers?: NodeListOf<HTMLUnknownElement>;

  protected style: CSSStyleDeclaration;

  protected autobind = true;

  static get observedAttributes() {
    return ['container-selector', 'id'];
  }

  protected toggleButtonEvents = new EventDispatcher('bs4-toggle-button');

  protected debug = Debug('component:' + Bs4SidebarComponent.tagName);

  protected scope: IScope = {
    containerSelector: undefined,
    state: 'hidden',
    hide: this.hide,
    toggle: this.toggle,
    id: undefined,
    options: {
      position: 'left',
      autoShowOnWiderThan: 1199,
      autoHideOnSlimmerThan: 1200,
      autoHideOnPathnames: ['/'],
      overlayOnSlimmerThan: 1200,
    },
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.debug('constructor', this);
    this.init(Bs4SidebarComponent.observedAttributes);
    this.style = window.getComputedStyle(this.el);
    this.toggleButtonEvents.on('toggle', (targetId: string) => {
      this.debug('toggle targetId', targetId);
      if (targetId === this.scope.id) {
        this.toggle();
      }
    });
    window.addEventListener('resize', this.onResize.bind(this), false);
    this.setStateByEnviroment();
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
    const vw = Utils.getViewportDimensions().w;
    if (vw < this.scope.options.overlayOnSlimmerThan) {
      this.scope.state = 'overlay-' + this.scope.options.position as State;
    } else {
      this.scope.state = 'side-' + this.scope.options.position as State;
    }
    this.onStateChange();
  }

  public toggle() {
    if (this.scope.state === 'hidden') {
      this.show();
    } else {
      this.hide();
    }
  }

  protected onHidden() {
    this.setContainersStyle();
    this.el.setAttribute('style', 'transform:translateX(-100%)');
  }

  protected onSide(directon: State) {
    this.setContainersStyle('', directon);
    this.el.setAttribute('style', 'transform:translateX(0)');
  }

  protected onOverlay(directon: State) {
    this.setContainersStyle('', directon);
    this.el.setAttribute('style', 'transform:translateX(0)');
  }

  protected onStateChange() {
    this.debug('state changed: ' + this.scope.state);
    switch (this.scope.state) {
      case 'side-left':
      case 'side-right':
        this.onSide(this.scope.state);
        break;
        case 'overlay-left':
        case 'overlay-right':
          this.onOverlay(this.scope.state);
          break;
      default:
        this.onHidden();
        break;
    }
    this.toggleButtonEvents.trigger('toggled', this.scope.state);
  }

  protected get width() {
    return this.el.offsetWidth;
  }

  protected setStateByEnviroment() {
    if (this.scope.options.autoHideOnPathnames.includes(window.location.pathname)) {
      return this.hide();
    }
    const vw = Utils.getViewportDimensions().w;
    if (vw < this.scope.options.autoHideOnSlimmerThan) {
      return this.hide();
    }
    if (vw < this.scope.options.autoHideOnSlimmerThan) {
      return this.hide();
    }
    if (vw > this.scope.options.autoShowOnWiderThan) {
      return this.show();
    }
  }

  protected onResize() {
    this.setStateByEnviroment();
  }

  protected initContainers(newValue?: string) {
    newValue = newValue || this.scope.containerSelector;
    this.debug('initContainers', newValue);
    if (newValue) {
      this.containers = document.querySelectorAll<HTMLUnknownElement>(newValue);
    }
    this.setContainersStyle();
    this.onStateChange();
  }

  protected setContainersStyle(style?: string, move?: State) {
    if (this.containers) {
      for (const container of this.containers) {
        this.setContainerStyle(container, style, move);
      }
    }
  }

  /**
   * Sets the container style, takes overs always the transition style of this sidebar
   * @param container
   * @param style
   * @param move
   */
  protected setContainerStyle(container: HTMLUnknownElement, style: string = '', move?: State) {
    if (move) {
      const width = this.width;
      const conStyle = window.getComputedStyle(container);
      switch (move) {
        case 'side-left':
          switch (conStyle.position) {
            case 'fixed':
              style += 'left:' + width + 'px';
              break;
            default:
              style += 'margin-left:' + width + 'px';
              break;
          }
          break;
        case 'side-right':
          switch (conStyle.position) {
            case 'fixed':
              style += 'right:' + width + 'px';
              break;
            default:
              style += 'margin-right:' + width + 'px';
              break;
          }
          break;
        default:
          break;
      }
    }
    return container.setAttribute('style', `transition:${this.style.transition};${style}`);
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

  protected parsedAttributeChangedCallback(attributeName: string, oldValue: any, newValue: any, namespace: string | null) {
    super.parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace);
    if (attributeName === 'containerSelector') {
      this.initContainers(newValue);
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
