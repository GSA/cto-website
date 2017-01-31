const gulp = require("gulp");
const gutil = require("gulp-util");
const eslint = require("gulp-eslint");
const cp = require("child_process");
const browserSync = require("browser-sync").create();

gulp.task("default", ["build", "serve"]);

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

gulp.task("serve", function () {
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
