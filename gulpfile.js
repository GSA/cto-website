const gulp = require("gulp");
const gutil = require("gulp-util");
const eslint = require("gulp-eslint");
const cp = require("child_process");
const browserSync = require("browser-sync").create();
const _ = require("lodash");

/* CONFIGURE NPM VENDOR ASSETS */
const assets = {
  "uswds": {
    js: ["dist/js/**"],
    css: ["dist/css/**"],
    img: ["dist/img/**"],
    fonts: ["dist/fonts/**"]
  },
  "lunr": {
    js: ["lunr.min.js"]
  },
  "font-awesome": {
    fonts: ["fonts/*"]
  }
};

gulp.task("default", ["serve"]);

gulp.task("build", function () {
  const jekyll = cp.spawn("bundle", ["exec", "jekyll", "build", "--watch", "--incremental"]);
  const jekyllLogger = function (buffer) {
    buffer.toString().split(/\n/).forEach(function (message) {
      gutil.log("Jekyll: " + message);
    });
  }
  jekyll.stdout.on("data", jekyllLogger);
  jekyll.stderr.on("data", jekyllLogger);
});

gulp.task("serve", ["build"], function () {
  browserSync.init({
    server: {
      baseDir: "_site/"
    },
    files: "_site/**/*"
  });
});

gulp.task("lint", function () {
  return gulp.src("assets/js/**/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("copy-assets", function () {
  _.forEach(assets, function (vendorAssets, vendor) {
    _.forEach(vendorAssets, function (asset, type) {
      gulp.src("node_modules/" + vendor + "/" + asset).pipe(gulp.dest("assets/vendor/" + vendor + "/" + type));
    })
  });
});
