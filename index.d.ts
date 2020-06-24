type TagsMap = Record<string, string>;
declare function remoteGitTags(url: string): Promise<TagsMap>;
export = remoteGitTags