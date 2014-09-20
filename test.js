'use strict';
var test = require('ava');
var remoteGitTags = require('./');

test(function (t) {
	remoteGitTags('github.com/sindresorhus/playground', function (err, tags) {
		t.assert(!err, err);
		t.assert(tags['v0.1.0'] === '69e308412e2a5cffa692951f0274091ef23e0e32');
		t.end();
	});
});
