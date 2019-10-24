Copy the snippets
* `utils-json-link.liquid`,
* `utils-json-links.liquid`,
* `utils-json-linklist.liquid`
* and `utils-json-linklists.liquid`

from [@ribajs/shopify/src/snippets/](https://github.com/ribajs/riba/tree/master/packages/shopify/src/snippets) to your themes snippets directory to transform shopify linklists to a json string.

```html
{% raw %}<script>
var linklists = {% include 'utils-json-linklists' %};
</script>{% endraw %}
```
