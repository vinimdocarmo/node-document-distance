'use strict';

module.exports = function (doc1, doc2) {
	if (typeof doc1 !== 'string' || doc2 !== 'string') {
		throw new TypeError('Expected two strings as arguments');
	}

	return 0.0;
};
