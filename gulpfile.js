var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del'),
    jslint = require('gulp-jslint');

gulp.task('jslint', function () {
    return gulp.src([
        './teacherOnline/star-project/js/main.js'
    ]).pipe(jslint({
        node: true,
        nomen: true,
        sloppy: true,
        plusplus: true,
        unparam: true,
        stupid: true
    }));
});

gulp.task('minifycss', function () {
    return gulp.src('./teacherOnline/star-project/css/*.css')      //压缩的文件
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('./teacherOnline/star-project/minified/css'))   //输出文件夹
});

gulp.task('minifyjs', function () {
    return gulp.src(['./teacherOnline/star-project/js/zepto.min.js', './teacherOnline/star-project/js/zepto.scroll.js', './teacherOnline/star-project/js/tools.js', './teacherOnline/star-project/js/main.js'])
        .pipe(concat('star-project.js'))    //合并所有js到XX.js
        .pipe(gulp.dest('./teacherOnline/star-project/minified/js'))    //输出XX.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('./teacherOnline/star-project/minified/js'));  //输出
});

gulp.task('default', ['jslint']);