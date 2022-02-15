const gulp = require("gulp");
const uswds = require("@uswds/compile");
const babel = require("gulp-babel");

uswds.paths.src.projectSass = "./_sass";
uswds.paths.dist.theme = "./_sass/uswds";
uswds.paths.dist.img = "./assets/vendor/uswds/img";
uswds.paths.dist.fonts = "./assets/vendor/uswds/fonts";
uswds.paths.dist.js = "./assets/vendor/uswds/js";
uswds.paths.dist.css = "./assets/vendor/uswds/css";

exports.compileUswds = uswds.compile;
exports.updateUswds = uswds.updateUswds;

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
  },
  {
    module: "mousetrap",
    content: {
      js: ["mousetrap.min.js"]
    }
  },
  {
    module: "netlify-cms",
    content: {
      js: ["dist/netlify-cms.js", "dist/netlify-cms.js.map"]
    }
  },
  {
    module: "react",
    content: {
      js: ["umd/react.production.min.js"]
    }
  }
];

function copyAssets(cb) {
  assets.forEach((asset) => {
    const name = asset.module.split("/").slice().pop()
    for (type in asset.content) {
      for (item of asset.content[type]) {
        const source = `node_modules/${asset.module}/${item}`;
        const destination = `assets/vendor/${name}/${type}`;
        console.log(`${source} -> ${destination}`)
        gulp.src(source).pipe(gulp.dest(destination));
      }
    }
  });
  return cb();
}

function compileAdminTemplates() {
  const source = "_admin/templates.jsx";
  const destination = "admin";
  return gulp.src(source).pipe(babel({ presets: ["@babel/preset-react"]})).pipe(gulp.dest(destination));
}

function watchAdminTemplates() {
  return gulp.watch("_admin/*.jsx", compileAdminTemplates);
}

exports.copyAssets = copyAssets;
exports.compileAdminTemplates = compileAdminTemplates;
exports.watchAdminTemplates = gulp.series(compileAdminTemplates, watchAdminTemplates);
exports.watch = gulp.parallel(this.watchAdminTemplates, uswds.watch);
exports.default = this.watch;
