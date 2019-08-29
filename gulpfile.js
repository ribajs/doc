'use strict';

const gulp = require('gulp');
const log = require('fancy-log');
const pjson = require('./package.json');
const ribaPjson = require('./node_modules/ribajs/package.json');
const zip = require('gulp-zip');
const jsoncombine = require('gulp-jsoncombine');
const pug = require('gulp-pug');
const rename = require("gulp-rename");

// list of settings files to include, in order of inclusion
const settingsSchemas = [
  'theme_info',
  'general',
  'home',
];

const files = {
  zip: [
    'theme/assets/*',
    'theme/config/*',
    'theme/layout/*',
    'theme/locales/*',
    'theme/sections/*',
    'theme/snippets/*',
    'theme/templates/*',
    'theme/templates/customers/*'
  ],
  theme_settings: './settings_schema/*.json',
  templates: {
    snippets: './src/pug/snippets/*.pug',
    pages: './src/pug/pages/*.pug',
    layouts: './src/pug/layout/*.pug',
    includes: ['./src/pug/includes/*.pug', './src/pug/includes/*.md'],
  },
};
 
/**
 * Cretae a zipped file of the theme that can be uploaded to Shopify
 */
gulp.task('build:zip', () => {
  return gulp.src(files.zip, {base: "."})
    .pipe(zip(pjson.name + '-' + pjson.version + '.zip'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch:zip', () => {
  return gulp.watch(files.zip, gulp.series('build:zip'));
});

/**
 * Create settings_schema.json
 */
gulp.task('build:theme_settings', () => {
  return gulp.src(files.theme_settings)
    .pipe(jsoncombine('settings_schema.json', (data) => {
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

const buildTemplate = (files, targetDir) => {
  log.info('file', files);
  return gulp.src(files)
    .pipe(pug({
      locals: {
        riba: ribaPjson
      }
    }))
    .pipe(rename(function (path) {
      path.extname = ".liquid";
    }))
    .pipe(gulp.dest(`./theme/${targetDir}/`));
};

const buildTemplateSnippets = (files) => {
  return buildTemplate(files, 'snippets');
};

const buildTemplateLayouts = (files) => {
  return buildTemplate(files, 'layout');
};

const buildTemplatePages = (files) => {
  return buildTemplate(files, 'templates');
};


gulp.task('build:templates:snippets', () => {
  return buildTemplateSnippets(files.templates.snippets);
});

gulp.task('watch:templates:snippets', () => {
  return gulp.watch(files.templates.snippets)
  .on('change', buildTemplateSnippets)
  .on('add', buildTemplateSnippets);
});


gulp.task('build:templates:layouts', () => {
  return buildTemplateLayouts(files.templates.layouts);
});

gulp.task('watch:templates:layouts', () => {
  return gulp.watch(files.templates.layouts)
  .on('change', buildTemplateLayouts)
  .on('add', buildTemplateLayouts);
});


gulp.task('build:templates:pages', () => {
  return buildTemplatePages(files.templates.pages);
});

gulp.task('watch:templates:pages', () => {
  return gulp.watch(files.templates.pages)
  .on('change', buildTemplatePages)
  .on('add', buildTemplatePages);
});


/**
 * Builds all templates if any include file was changes
 */
gulp.task('watch:templates:includes', () => {
  return gulp.watch(files.templates.includes)
  .on('change', gulp.series('build:templates'))
  .on('add', gulp.series('build:templates'));
});


gulp.task('build:templates', gulp.series('build:templates:snippets', 'build:templates:pages', 'build:templates:layouts'));

gulp.task('watch:templates', gulp.parallel('watch:templates:snippets', 'watch:templates:pages', 'watch:templates:layouts', 'watch:templates:includes'));