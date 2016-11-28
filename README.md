# react-gulpfile
A Gulpfile for React

## What is react-gulpfile?
* A Gulpfile ready to build your React application.

## Requirements
* [gulp](http://gulpjs.com/)
* [gulp-babel](https://github.com/babel/gulp-babel)
* [babel-preset-latest](http://babeljs.io/docs/setup/#installation)
* [babel-preset-react](https://babeljs.io/docs/plugins/preset-react/)
* [gulp-browserify](https://github.com/deepak1556/gulp-browserify)
* [react](https://facebook.github.io/react/)

## To Get Started
All you need to do to get started is clone the depository.
1. `git clone https://github.com/aFraley/react-gulpfile.git`
2. `cd react-gulpfile`
3. `npm install`
4. `gulp`
`gulp` will call the default function which will call the build function and
watch for changes to the `var paths = {}` (paths object).

## What is inside the Gulpfile.js?
Adjust the `gulp.src()` and `gulp.dest()` according to your project's needs.
```
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
```
