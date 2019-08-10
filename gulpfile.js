(function () {
  'use strict';
}());

const gulp          = require('gulp');
const log           = require('fancy-log');
const pjson         = require('./package.json');
const zip           = require('gulp-zip');
const jsoncombine   = require('gulp-jsoncombine');
const pug           = require('gulp-pug');
const rename          = require("gulp-rename");

// list of settings files to include, in order of inclusion
var settingsSchemas = [
  'theme_info',
  'general',
  'home',
];

// Basic error messages output to the console.
// Used with plumber so we don't stop the other tasks from running or kill the gulp process on an error
var onError = function (err) {
  log.error(err);
};
 
/**
 * Cretae a zipped file of the theme that can be uploaded to Shopify
 */
gulp.task('zip', function () {
  var theme = [
    'theme/assets/*',
    'theme/config/*',
    'theme/layout/*',
    'theme/locales/*',
    'theme/sections/*',
    'theme/snippets/*',
    'theme/templates/*',
    'theme/templates/customers/*'
  ];

  return gulp.src(theme, {base: "."})
    .pipe(zip(pjson.name + '-' + pjson.version + '.zip'))
    .pipe(gulp.dest('./'));
});

/**
 * Create settings_schema.json
 */
gulp.task('theme_settings', function () {
  return gulp.src('./settings_schema/*.json')
    .pipe(jsoncombine('settings_schema.json',function(data){
      var data_array = [];
      // collect the json data and store it in the correct order
      for (var i = 0; i < settingsSchemas.length; i++) {
        var file = settingsSchemas[i];
        data_array.push(data[file]);
      }
      return new Buffer(JSON.stringify(data_array, null, 2));
    }))
    .pipe(gulp.dest('./theme/config/'));
});

gulp.task('templates:snippets', function buildHTML() {
  return gulp.src('./src/pug/snippets/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(rename(function (path) {
    path.extname = ".liquid";
  }))
  .pipe(gulp.dest('./theme/snippets/'));
});


gulp.task('templates:pages', function buildHTML() {
  return gulp.src('./src/pug/pages/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(rename(function (path) {
    path.extname = ".liquid";
  }))
  .pipe(gulp.dest('./theme/templates/'));
});

gulp.task('templates', gulp.series('templates:snippets', 'templates:pages'));