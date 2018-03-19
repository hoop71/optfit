const gulp = require('gulp'),
	path = require('path'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	open = require('gulp-open');

var Paths = {
	HERE: './',
	DIST: './dist/',
	CSS: './assets/css/',
	SCSS_TOOLKIT_SOURCES: './assets/scss/Optfit.scss',
	SCSS: './assets/scss/**/**',
	IMG: './assets/img/**/**',
	JS: './assets/js/*.js'
};

gulp.task('compile-scss', function() {
	return gulp
		.src(Paths.SCSS_TOOLKIT_SOURCES)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write(Paths.HERE))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
	gulp.watch(Paths.SCSS, ['compile-scss']);
});

gulp.task('open', function() {
	gulp.src('index.html').pipe(open());
});

gulp.task('open-app', ['open', 'watch']);
gulp.task('prod', ['compile-scss']);
