const gulp = require("gulp");
const sass = require("gulp-sass");

const scssFiles = "styles/scss/*.scss";
const cssDest = "styles/css/";

function styles() {
  return gulp
    .src(scssFiles)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(cssDest));
}

function watch() {
  gulp.watch(scssFiles, styles);
}

exports.styles = styles;
exports.watch = watch;
