const uswds = require("@uswds/compile");

uswds.paths.src.projectSass = "./assets/sass";
uswds.paths.dist.theme = "./assets/sass/uswds";
uswds.paths.dist.img = "./static/assets/uswds/img";
uswds.paths.dist.fonts = "./static/assets/uswds/fonts";
uswds.paths.dist.js = "./static/assets/uswds/js";
uswds.paths.dist.css = "./static/assets/css";

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.default = uswds.watch;
