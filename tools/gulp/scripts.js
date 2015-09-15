import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import gutil from 'gulp-util';
import gulp from 'gulp';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import watchify from 'watchify';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';

let watch = false;

function bundle() {

  let brows;
  const customOpts = {
    entries: ['./src/app.js'],
    debug: true
  };

  if (watch) {
    const opts = Object.assign({}, watchify.args, customOpts);
    brows = watchify(browserify(opts));
  } else {
    customOpts.debug = false;
    brows = browserify(customOpts);
  }

  brows
    .on('update', bundle)
    .on('log', gutil.log)
    .transform(babelify.configure({
      stage: 0
    }));

  function rebundle(bundler) {
    return bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(gulpif(!watch, uglify()))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
  }

  return rebundle(brows);
}

gulp.task('js', () => {
  bundle();
});

gulp.task('watch-js', () => {
  watch = true;
  bundle();
});
