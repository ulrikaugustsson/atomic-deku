import gulp from 'gulp';
import browserSync from 'browser-sync';

/* eslint-disable no-unused-vars*/
import styles from './styles.js';
import scripts from './scripts.js';
/* eslint-enable no-unused-vars*/

browserSync.create();

gulp.task('default', ['js', 'css', 'html']);

gulp.task('watch', ['css', 'html', 'watch-js'], () => {
  gulp.watch(['src/**/*.css'], ['css']);
  gulp.watch(['src/**/*.html'], ['html']).on('change', browserSync.reload);


  browserSync.init({
    server: {
      baseDir: './dist'
    },
    open: false
  });
});

gulp.task('html', () => {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});
