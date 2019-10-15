Loads an shopify image with the exact size for the current `img` element without the need to get the right size manually over the `img_url` filter / formatter. The image source path is set by the `srcset` and `sizes` attributes to make them responsive.

<rv-example-tabs handle="shopify-img">
<template type="single-html-file">
<img
  rv-shopify-img="'{{ settings.example_image | img_url: 'master' }}'"
  src="{{ settings.example_image | img_url: 'master' }}"
  lazyload="lazy"
  class="img-fluid"
  alt="{{ settings.example_image.alt }}"
/>
</template>
</rv-example-tabs>