import { BasicComponent } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import template from "./file-tree.component.html";

// interface Scope {}

export class FileTreeComponent extends BasicComponent {
  public static tagName = "rv-file-tree";

  static get observedAttributes() {
    return [];
  }

  public scope = {}; // : Scope = {};

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(FileTreeComponent.observedAttributes);
  }

  protected template() {
    // Only set the component template if there no childs already
    if (hasChildNodesTrim(this)) {
      return null;
    } else {
      return template;
    }
  }
}
