var gulp  = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');

var paths = {
  scripts: 'src/app.jsx'
};

gulp.task('build', function(){
  console.log('Gulp!');
  return gulp.src(paths.scripts)
    .pipe(babel({
      presets: ['latest', 'react']
    }))
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['build']);
})

gulp.task('default', ['build', 'watch']);
