This binder is the heart of the router module. If you want to develop a **single-page application** then the main content should use this binder to dynamically exchange its content. This binder is what the `barba-wrapper` and `barba-container` are in barba.js (see [barba install documentation](https://barba.js.org/v1/installation.html)). As a bigger example this site also uses this binder to dynamically load its content. Your application can also have multiple view binders, only the ids need to be different. In the example below we also use an additional view binder to demonstrate the functionality:

<rv-bind-content class="pt-3">
  <template>
    <rv-example-tabs class="pt-3" handle="view-binder">
      <template type="single-html-file">
        <div
          id="example-view"
          rv-view="{'containerSelector': '#example-view-container', 'datasetToModel': true, 'changeBrowserUrl': false}"
        >
          <div id="example-view-container">
            <p>
              This is the content of the element with the rv-view binder.
            </p>
            <button rv-route="{'url': '/pages/router-example-view-page', 'viewId': 'example-view'}" class="btn btn-danger m-3">Click to load a page</button>
          </div>
        </div>
      </template>
    </rv-example-tabs>
  </template>
</rv-bind-content>
