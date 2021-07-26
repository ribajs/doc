import { ShopifyLinklistComponent as OriginalShopifyLinklistComponent } from "@ribajs/shopify";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import template from "./shopify-linklist.component.html";

/**
 * shopify-filter
 */
export class ShopifyLinklistComponent extends OriginalShopifyLinklistComponent {
  public static tagName = "shopify-linklist";

  constructor() {
    super();
  }

  /**
   * Only set the component template if there no childs already
   */
  protected template() {
    if (hasChildNodesTrim(this)) {
      return null;
    } else {
      return template;
    }
  }
}
