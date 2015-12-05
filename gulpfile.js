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
    return gulp.src('./teacherOnline/star-project/css/*.css')      //ѹ�����ļ�
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())   //ִ��ѹ��
        .pipe(gulp.dest('./teacherOnline/star-project/minified/css'))   //����ļ���
});

gulp.task('minifyjs', function () {
    return gulp.src(['./teacherOnline/star-project/js/zepto.min.js', './teacherOnline/star-project/js/zepto.scroll.js', './teacherOnline/star-project/js/tools.js', './teacherOnline/star-project/js/main.js'])
        .pipe(concat('star-project.js'))    //�ϲ�����js��XX.js
        .pipe(gulp.dest('./teacherOnline/star-project/minified/js'))    //���XX.js���ļ���
        .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
        .pipe(uglify())    //ѹ��
        .pipe(gulp.dest('./teacherOnline/star-project/minified/js'));  //���
});

gulp.task('default', ['jslint']);