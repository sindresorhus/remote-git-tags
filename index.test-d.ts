import { expectType } from 'tsd';
import remoteGitTags = require('.');

expectType<(url: string) => Promise<Map<string, string>>>(remoteGitTags);