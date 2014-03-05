var assert   = require('assert');
var gutil    = require('gulp-util');
var cssfont64 = require('../index');
var fs       = require('fs');
var path     = require('path');

describe('gulp-cssfont64', function() {
	describe('in buffer mode', function() {

		it('should encode fonts to base64 and generate a css file', function(done) {

			var filename = path.join(__dirname, '/fixtures/myfont.ttf');

			var input = new gutil.File({
				base: path.dirname(filename),
				path: filename,
				contents: new Buffer(fs.readFileSync(filename, 'utf8'))
			});

			var stream = cssfont64();

			stream.on('data', function(newFile) {
				assert.equal(String(newFile.contents), fs.readFileSync(path.join(__dirname, '/fixtures/myfont.css'), 'utf8'));
				done();
			})

			stream.write(input);

		});

	});
});