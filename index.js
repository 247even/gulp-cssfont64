'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

module.exports = function() {


	// create a stream through which each file will pass
	return through.obj(function(file, enc, callback) {

		if (file.isNull()) {
			this.push(file);
			// do nothing if no contents
			return callback();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-font64', 'Streaming not supported'));
			return callback();
		}

		if (file.isBuffer()) {
			var file64 = new Buffer(file.contents).toString('base64');
			var mtype =  mime.lookup(file.path);
			var fileext = path.extname(file.path); 
			var filename = path.basename(file.path, fileext);
			var csswrapper = '@font-face {font-family: '+filename+'; src: url(data:'+mtype+';base64,'+file64+');}';
			var output = csswrapper;
			
			file.contents = new Buffer(output);
			file.path = gutil.replaceExtension(file.path, '.css');
			return callback(null, file);
		}
	});
}; 