/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const gutil = require("gulp-util");
const argv = require("yargs").argv;
const requireDir = require("require-dir");

// Gets the gulp tasks path of shared-code
const ribaShopifyTaskDir = path.dirname(
  require.resolve("@ribajs/shopify-gulp")
);

if (argv.environment && argv.environment !== "undefined") {
  console.log(`setting tkEnvironments to ${argv.environment}`);
  gutil.env.environments = argv.environment;
}

// imports gulp tasks from the shared-code's `build-system/tasks` directory
requireDir(ribaShopifyTaskDir, { extensions: [".js", ".cjs"] });
