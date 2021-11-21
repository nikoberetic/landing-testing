// For the default version
import algoliasearch from 'algoliasearch';

import { chunkArray } from './helpers';

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const PROFILES_INDEX_NAME = process.env.PROFILES_INDEX_NAME;

export const getAlgoliaClient = () => {
    return algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
}

export const getProfilesIndex = () => {
    const client = getAlgoliaClient();
    return client.initIndex(PROFILES_INDEX_NAME);
}

export const reindex = profiles => {
    const index = getProfilesIndex();
    const profileChunks = chunkArray(profiles, 10);
    profileChunks.forEach(chunk => {
        // add algolia objectID to avoid duplication 
        const preparedChunk = chunk.map(p => {
            return { objectID: p.profile.id, _tags: [], reviews: [], isVerified: false, ...p.profile, }
        });
        index.saveObjects(preparedChunk)
            .then(({ objectIDs }) => console.log("chunk reindexed", objectIDs))
            .catch((err) => console.log("failed to reindex", err));
    });
};
