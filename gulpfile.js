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