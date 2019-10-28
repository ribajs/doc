Returns true if the number is even.

<rv-example-tabs class="pt-3" handle="bs4-icon">
<template type="single-html-file">
<ul>
  <li rv-each-text='["Milk","Chocolate","Butter","Toast"]' rv-class-text-success="%text% | even">{text}</li>
</ul>
</template>
</rv-example-tabs>