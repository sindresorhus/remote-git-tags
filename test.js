import test from 'ava';
import fn from './';

test.cb(t => {
	fn('github.com/sindresorhus/got', (err, tags) => {
		t.ifError(err);
		t.is(tags['v5.0.0'], '0933d0bb13f704bc9aabcc1eec7a8e33dc8aba51');
		t.end();
	});
});
