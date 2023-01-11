const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
//const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
//const { watch } = require('browser-sync')
const sync = require('browser-sync').create()

function html() {
    return src('source/html/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('source/..'))
}

function scss() {
    return src('source/style/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('source/..'))
}

function serve() {
    sync.init({
        server: {
            baseDir: "./"
        },
        port: 3000,
        notify: false
    })

    watch('source/html/**.html', series(html)).on('change', sync.reload)
    watch('source/style/**.scss', series(scss)).on('change', sync.reload)
}

exports.build = series(scss, html)
exports.serve = series(scss, html, serve)