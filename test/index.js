'use strict';
var assert = require('assert'),
	fs = require('fs');

var documentDistance = require('../');

describe('document distance algorithm', function() {

	var documentOne, documentTwo;

	before(function(done) {
		fs.readFile('./test/documents/file1.txt', function(err, data) {
			if (err) {
				done(err);
			}

			documentOne = data.toString();

			fs.readFile('./test/documents/file2.txt', function(err, data) {
				if (err) {
					done(err);
				}

				documentTwo = data.toString();

				done();
			});
		});
	});

	it('should return 0.0 to two identical documents', function () {
		assert.strictEqual(documentDistance(documentOne, documentOne), 0.0);
	});

	it('should return 1.4619186520574097 for the two document examples', function() {
		assert.strictEqual(documentDistance(documentOne, documentTwo), 1.4619186520574097);
	});
});

