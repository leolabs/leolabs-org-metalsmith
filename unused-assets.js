const fs = require('fs');
const glob = require('glob');

const checkFiles = "build/**/*.{png,jpg,jpeg}";
const files      = "build/**/*.{html,css}";

glob(checkFiles, {}, function(err, files) {
    console.log(files);
});