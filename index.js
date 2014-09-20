var url = require('url');
var net = require('net')
var gitclient = require('git-fetch-pack');
var transport = require('git-transport-protocol');

module.exports = function (str, cb) {
	// fix schemeless urls
	str = str.replace(/^(?!(?:https|git):\/\/)/, 'https://');

	var tcp = net.connect({
		host: url.parse(str).host,
		port: 9418
	});
	var client = gitclient(str);
	var tags = {};

	client.refs.on('data', function (ref) {
		var name = ref.name;

		if (/^refs\/tags/.test(name)) {
			// strip off the indicator of dereferenced tags so we can
			// override the previous entry which points at the tag hash
			// and not the commit hash
			tags[name.split('/')[2].replace(/\^\{\}$/, '')] = ref.hash;
		}
	});

	client
		.pipe(transport(tcp))
		.on('error', cb)
		.pipe(client)
		.on('error', cb)
		.once('end', function () {
			cb(null, tags);
		});
};
