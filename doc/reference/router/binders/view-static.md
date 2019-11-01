Loads the content of the url with pjax and replaces this with the inner html of the element

<rv-bind-content class="pt-3">
  <template>
    <rv-example-tabs class="pt-3" handle="view-static-binder">
      <template type="single-html-file">
        <div rv-view-static="{'url': '/pages/iconset'}" class="m-3"></div>
      </template>
    </rv-example-tabs>
  </template>
</rv-bind-content>
