var
    gulp         = require('gulp'),
    browserSync  = require('browser-sync').create(),
    sass         = require('gulp-sass'),
    clean        = require('gulp-clean'),
    metalsmith   = require('gulp-metalsmith'),
    runSequence  = require('run-sequence'),
    collections  = require('metalsmith-collections'),
    layouts      = require('metalsmith-layouts'),
    permalinks   = require('metalsmith-permalinks'),
    markdown     = require('metalsmith-markdown'),
    htmlMinifier = require('metalsmith-html-minifier'),
    sitemap      = require('metalsmith-sitemap'),
    excerpts     = require('metalsmith-better-excerpts'),
    alias        = require('metalsmith-alias'),
    slug         = require('metalsmith-slug'),
    hyphenate    = require('metalsmith-hyphenate'),
    highlightJS  = require('metalsmith-metallic');

const destination = "build";

gulp.task('clean', function() {
    return gulp.src(destination, {read: false})
        .pipe(clean());
});

gulp.task('sass', function() {
    return gulp.src('./theme/scss/*.scss')
        .pipe(sass({
            outputStyle: "compressed"
        }).on('error', sass.logError))
        .pipe(gulp.dest(destination + '/css'))
        .pipe(browserSync.stream());
});

gulp.task('assets', function() {
    return gulp.src('./assets/**/*')
        .pipe(gulp.dest(destination + "/assets"))
        .pipe(browserSync.stream());
});

// build HTML files using Metalsmith
gulp.task('metalsmith', function() {
    return gulp.src('content/**').pipe(metalsmith({
        // Metalsmith's root directory, for example for locating templates, defaults to CWD
        root: __dirname,
        // Parsing frontmatter, defaults to true
        frontmatter: true,
        // Metalsmith plugins to use:
        use: [
            collections({
                articles: {
                    pattern: 'posts/*.md',
                    sortBy: 'date',
                    reverse: true
                }
            }),
            highlightJS(),
            markdown(),
            slug(),
            permalinks({
                pattern: ":slug/",
                relative: false,
                linksets: [{
                    match: { collection: 'articles' },
                    pattern: 'blog/:slug'
                }]
            }),
            excerpts(),
            layouts({
                engine: "handlebars",
                default: "default.html",
                directory: "theme/layouts",
                partials: "theme/partials"
            }),
            hyphenate({
                "elements": ["h1", "p", "blockquote", "li"]
            }),
            alias(),
            sitemap({
                hostname: "https://leolabs.org"
            }),
            htmlMinifier()
        ],
        metadata: {
            site_title: 'Sample static site'
        }
    }))
        .pipe(gulp.dest(destination))
        .pipe(browserSync.stream());
});

gulp.task('build', ['clean'], function(cb) {
    runSequence('clean', ['sass', 'metalsmith', 'assets'], cb);
});

gulp.task('default', ['build']);

gulp.task('serve', ['default'], function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    gulp.watch("theme/**/*.scss", ['sass']);
    gulp.watch("content/**/*.md", ['metalsmith']);
    gulp.watch("assets/**/*", ['assets']);
});
