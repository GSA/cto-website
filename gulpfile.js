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
    js: ["lunr.min.js"]
  },
  "font-awesome": {
    fonts: ["fonts/*"]
  }
};

gulp.task("copy-assets", function () {
  _.forEach(assets, function (vendorAssets, vendor) {
    _.forEach(vendorAssets, function (asset, type) {
      gulp.src("node_modules/" + vendor + "/" + asset).pipe(gulp.dest("assets/vendor/" + vendor + "/" + type));
    })
  });
});

gulp.task("default", ["copy-assets"]);
