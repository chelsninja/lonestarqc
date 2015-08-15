"use strict";

/*
 Modules
 */
var gulp = require('gulp'),
	gulpIf = require('gulp-if'),
	jshint = require('gulp-jshint'),
	csslint = require('gulp-csslint'),
	minifyCss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	minifyHtml = require('gulp-minify-html'),
	watch = require('gulp-watch'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	eventStream = require('event-stream'),
	runSequence = require('run-sequence'),
	html2js = require('gulp-ng-html2js');

/*
 Helpful Variables
 */
var dev = 'dev',
	prod = 'prod',
	bower = 'bower_components',
	isProd = false;

/*
 Globs
 */
var htmlFiles = [
		dev + '/index.html'
	],
	templateFiles = [
		dev + '/**/*.html',
		'!' + dev + '/index.html'
	],
	sassFiles = dev + '/**/*.scss',
	jsFiles = [
		dev + '/**/*.module.js',
		dev + '/**/*.js'
	],
	imgFiles = dev + '/images/**',
	fontFiles = dev + '/fonts/**';

var vendorCss = [
		bower + '/bootstrap/dist/css/bootstrap.min.css',
		bower + '/fontawesome/css/font-awesome.min.css'
	],
	vendorJs = [
		bower + '/jquery/dist/jquery.min.js',
		bower + '/angular/angular.min.js',
		bower + '/ui-router/release/angular-ui-router.min.js',
		bower + '/angular-animate/angular-animate.min.js',
		bower + '/bootstrap/dist/js/bootstrap.min.js',
		bower + '/angular-bootstrap/ui-bootstrap.min.js',
		bower + '/angular-bootstrap/ui-bootstrap-tpls.min.js'
	],
	vendorFonts = bower + '/fontawesome/fonts/*';

/*
 Tasks
 */
gulp.task('default', ['watch']);

gulp.task('watch', ['dev'], function() {
	gulp.watch(sassFiles, ['sass']);
	gulp.watch(jsFiles, ['js']);
	gulp.watch(htmlFiles, ['html']);
	gulp.watch(templateFiles, ['templates']);
	gulp.watch(imgFiles, ['img']);
	gulp.watch(fontFiles, ['font']);
});

gulp.task('dev', ['sass', 'js', 'html', 'templates', 'img', 'font', 'vendor']);

gulp.task('prod', function() {
	isProd = true;
	return runSequence(['dev']);
});

gulp.task('sass', function() {
	gulp.src(sassFiles)
		.pipe(sass())
		.pipe(csslint({
			'adjoining-classes': false
		}))
		.pipe(csslint.reporter())
		.pipe(concat("app.css"))
		.pipe(gulpIf(isProd, minifyCss()))
		.pipe(gulp.dest(prod));
});

gulp.task('js', function() {
	gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(concat('app.js'))
		.pipe(gulpIf(isProd, uglify()))
		.pipe(gulp.dest(prod));
});

gulp.task('html', function() {
	gulp.src(htmlFiles)
		.pipe(gulpIf(isProd, minifyHtml({
			empty: true,
			quote: true
		})))
		.pipe(gulp.dest(prod));
});

gulp.task('templates', function() {
	gulp.src(templateFiles)
		.pipe(minifyHtml({
			empty: true,
			spare: true,
			quotes: true
		}))
		.pipe(html2js({
			moduleName: "app.templates"
		}))
		.pipe(concat("templates.js"))
		.pipe(uglify())
		.pipe(gulp.dest(prod));
});

gulp.task('img', function() {
	gulp.src(imgFiles)
		.pipe(gulp.dest(prod + '/images'));
});

gulp.task('font', function() {
	gulp.src(fontFiles)
		.pipe(gulp.dest(prod + '/fonts'));
});

gulp.task('vendor', function() {
	eventStream.merge(
		gulp.src(vendorJs)
			.pipe(concat('vendor.js'))
			.pipe(gulp.dest(prod + '/vendor')),
		gulp.src(vendorCss)
			.pipe(concat('vendor.css'))
			.pipe(gulp.dest(prod + '/vendor')),
		gulp.src(vendorFonts)
			.pipe(gulp.dest(prod + '/fonts'))
	);
});

gulp.task('clean', function() {
	gulp.src(prod, {read: false})
		.pipe(clean());
});