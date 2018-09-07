const gulp = require("gulp");
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
    js: ["lunr.js"]
  },
  "font-awesome": {
    fonts: ["fonts/*"]
  },
  "jquery": {
    js: ["dist/jquery.min.js"]
  },
  "webfontloader": {
    js: ["webfontloader.js"]
  }
};

gulp.task("copy-assets", function (cb) {
  _.forEach(assets, function (vendorAssets, vendor) {
    _.forEach(vendorAssets, function (asset, type) {
      gulp.src("node_modules/" + vendor + "/" + asset).pipe(gulp.dest("assets/vendor/" + vendor + "/" + type));
    })
  });
  return cb()
});

gulp.task("default", gulp.series("copy-assets"));
