# remote-git-tags [![Build Status](https://travis-ci.org/sindresorhus/remote-git-tags.svg?branch=master)](https://travis-ci.org/sindresorhus/remote-git-tags)

> Get tags from a remote git repo

Like [`git ls-remote`](http://git-scm.com/docs/git-ls-remote.html), which doesn't require cloning the repo, but this is 100% JS, meaning no dependency on the git binary.

Really just some minor glue to [@chrisdickinson](https://github.com/chrisdickinson) awesome [work](https://github.com/search?utf8=%E2%9C%93&q=user%3Achrisdickinson+git-) on JSifying git.

You probably shouldn't use this in production.


## Install

```sh
$ npm install --save remote-git-tags
```


## Usage

```js
var remoteGitTags = require('remote-git-tags');

remoteGitTags('github.com/sindresorhus/remote-git-tags', function (err, tags) {
	console.log(tags);
	//=> { 'v1.0.0': '69e308412e2a5cffa692951f0274091ef23e0e32' }
});
```


## API

### remoteGitTags(url, callback)

#### url

*Required*  
Type: `string`

The git repo url.

#### callback(err, tags)

##### tags

Type: `object`  

Tags as keys and their commit SHA as values.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
