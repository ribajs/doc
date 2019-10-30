Formatter to get back a random value of an array

<rv-bind-content class="pt-3">
<template>
<rv-example-tabs class="pt-3" handle="random-formatter">
<template type="single-html-file">
<div class="row" rv-assign-random-class="'['col-2', 'col-3', 'col-4', 'col-5', 'col-6']' | random">
  <div rv-class="randomClass">This div has a random column class: {randomClass}</div>
</div>
</template>
</rv-example-tabs>
</template>
</rv-bind-content>
