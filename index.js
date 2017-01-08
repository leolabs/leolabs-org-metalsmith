var metalsmith   = require('metalsmith'),
    collections  = require('metalsmith-collections'),
    layouts      = require('metalsmith-layouts'),
    permalinks   = require('metalsmith-permalinks'),
    markdown     = require('metalsmith-markdown'),
    htmlMinifier = require('metalsmith-html-minifier'),
    sitemap      = require('metalsmith-sitemap'),
    excerpts     = require('metalsmith-better-excerpts'),
    alias        = require('metalsmith-alias'),
    browserSync  = require('metalsmith-browser-sync'),
    sass         = require('metalsmith-sass'),
    hightlightJS = require('metalsmith-metallic'),
    branch       = require('metalsmith-branch');

const source = "content";
const destination = "build";
var serve = process.argv[2] == "serve";

// build HTML files using Metalsmith
var ms = metalsmith(".")
    .source(source)
    .destination(destination)
    .use(sass({
        includePaths: ['./theme/scss/'],
        outputStyle: "compressed",
        outputDir: './css/'
    }))
    .use(collections({
        articles: {
            pattern: 'posts/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(hightlightJS())
    .use(markdown())
    .use(permalinks({
        pattern: ":title/",
        relative: false,
        linksets: [{
            match: { collection: 'articles' },
            pattern: 'blog/:title'
        }]
    }))
    .use(excerpts())
    .use(layouts({
        engine: "handlebars",
        default: "default.html",
        directory: "theme/layouts",
        partials: "theme/partials"
    }))
    .use(alias())
    .use(sitemap({
        hostname: "https://leolabs.org"
    }))
    .use(htmlMinifier());

if(serve) {
    ms.use(browserSync({
        server : "build",
        files  : ["content/**/*.md", "theme/**/*"]
    }));
}

ms.build(function(err) {
    if (err) throw err;
});
