import browserify from 'browserify'
import babelify from 'babelify'
import gulp from 'gulp'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import source from 'vinyl-source-stream'
import watchify from 'watchify'

gulp.task('assets', () => {
  gulp
    .src('assets/**')
    .pipe(gulp.dest('public/img'))
})

gulp.task('styles', () => {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public/css'))
})

function compile (watch) {

  let bundle = browserify('./src/index.js', {debug: true})

  function rebundle () {
    bundle
      .transform(babelify)
      .bundle()
      .on('error', function bundleError (err) {
        console.log(err)
        this.emit('end')
      })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public/js'))
  }

  if (watch) {
    bundle = watchify(bundle)
    bundle.on('update', () => {
      console.log('--> Bundling')
      rebundle()
    })
  }
  rebundle()
}

gulp.task('build', compile())

gulp.task('watch', compile(true))

gulp.task('default', ['assets', 'styles', 'build'])
