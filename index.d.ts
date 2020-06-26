declare const remoteGitTags: {
    /**
    Get tags from a remote Git repo

    @param url - The first number to add.
    @returns The tags from a remote Git repo.
    */
    (url: string): Promise<Map<string, string>>;
}

export = remoteGitTags;
