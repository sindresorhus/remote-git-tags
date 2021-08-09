import test from 'ava';
import remoteGitTags from './index.js';

test('main', async t => {
	const tags = await remoteGitTags('https://github.com/sindresorhus/got');
	t.is(tags.get('v6.0.0'), 'e5c2d9e93137263c68db985b3dc5b57865c67b82');
	t.is(tags.get('v5.0.0'), '0933d0bb13f704bc9aabcc1eec7a8e33dc8aba51');
});
