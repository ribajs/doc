// require("source-map-support").install(); // Used to inspect the code for debugging
const path = require("path");
const gutil = require("gulp-util");
const argv = require("yargs").argv;
const requireDir = require("require-dir");

// Gets the gulp tasks path of shared-code
const ribaShopifyTaskDir = path.resolve(
  path.dirname(require.resolve("@ribajs/shopify/package.json")),
  "build-system",
  "dist"
);

if (argv.environment && argv.environment !== "undefined") {
  console.log(`setting tkEnvironments to ${argv.environment}`);
  gutil.env.environments = argv.environment;
}

// imports gulp tasks from the shared-code's `build-system/tasks` directory
requireDir(ribaShopifyTaskDir);

// ===================== Old part ====================
// TODO move to shopify build system?

const gulp = require("gulp");
// const print = require("gulp-print").default;
const jsoncombine = require("gulp-jsoncombine");

// list of settings files to include, in order of inclusion
const settingsSchemas = ["theme_info", "general", "home", "shopify_module"];

const files = {
  theme_settings: "./settings_schema/*.json",
  // iconset: require.resolve("@ribajs/iconset") + "/dest/svg/*.svg",
  // favicons: "./src/assets/favicons/*",
};

/**
 * Create settings_schema.json
 * TODO move to riba shopify build system
 */
gulp.task("build:theme_settings", () => {
  return gulp
    .src(files.theme_settings)
    .pipe(
      jsoncombine("settings_schema.json", (data) => {
        var data_array = [];
        // collect the json data and store it in the correct order
        for (var i = 0; i < settingsSchemas.length; i++) {
          var file = settingsSchemas[i];
          data_array.push(data[file]);
        }
        return new Buffer.from(JSON.stringify(data_array, null, 2));
      })
    )
    .pipe(gulp.dest("./theme/config/"));
});

// gulp.task("build:assets:iconset", function () {
//   return gulp
//     .src(files.iconset)
//     .pipe(print())
//     .pipe(gulp.dest("./theme/assets"));
// });

// gulp.task("build:assets:favicons", function () {
//   return gulp
//     .src(files.favicons)
//     .pipe(print())
//     .pipe(gulp.dest("./theme/assets"));
// });

// gulp.task("build:assets:custom", function () {
//   return gulp
//     .src([files.iconset, files.favicons])
//     .pipe(print())
//     .pipe(gulp.dest("./theme/assets"));
// });
