const gulp = require("gulp");

// Include USWDS gulp tasks
require('./gulpfile-uswds.js');

// Specify assets to copy from node_modules
const assets = [
  {
    module: "lunr",
    content: {
      js: ["lunr.js"]
    }
  },
  {
    module: "@fortawesome/fontawesome-free",
    content: {
      webfonts: ["webfonts/*"],
      css: ["css/*"]
    }
  },
  {
    module: "jquery",
    content: {
      js: ["dist/jquery.min.js"]
    }
  },
  {
    module: "waypoints",
    content: {
      js: ["lib/jquery.waypoints.min.js"]
    }
  }
];

gulp.task("copy-assets", function (cb) {
  assets.forEach((asset) => {
    const name = asset.module.split("/").slice().pop()
    for (type in asset.content) {
      const source = `node_modules/${asset.module}/${asset.content[type]}`;
      const destination = `assets/vendor/${name}/${type}`;
      console.log(`${source} -> ${destination}`)
      gulp.src(source).pipe(gulp.dest(destination));
    }
  });
  return cb();
});

// Note: This overrides the USWDS default gulp task
gulp.task("default", gulp.series("copy-assets"));
