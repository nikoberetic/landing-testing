// For the default version
import algoliasearch from 'algoliasearch';

import { chunkArray, getRandomIndexes, } from './helpers';
import { MINER_TAGS } from '../consts';

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

const getRandomTags = () => {
    return getRandomIndexes(MINER_TAGS.length, 3).map(i => MINER_TAGS[i]);
}

export const reindex = async (profiles) => {
    const index = getProfilesIndex();
    const profileChunks = chunkArray(profiles, 10);
    profileChunks.forEach(async chunk => {
        // add algolia objectID to avoid duplication
        const preparedChunk = chunk.map(p => {
            const isVerified = Math.random() < 0.5;
            return {
                objectID: p.profile.id,
                _tags: getRandomTags(),
                isVerified: isVerified,
                ...p.profile,
            }
        });
        try {
            const { objectIDs } = await index.partialUpdateObjects(preparedChunk, { createIfNotExists: true });
            console.log("chunk reindexed", objectIDs);
        } catch (err) {
            console.log("failed to reindex", err);
        }
    });
};

export const getMinerProfile = async (minerId) => {
    try {
        return await getProfilesIndex().getObject(minerId);
    } catch (err) {
        console.log("failed to get miner profile", err);
        return null;
    }
}

export const updateMinerProfile = async (profile) => {
    try {
        return await getProfilesIndex().partialUpdateObject(profile);
    } catch (err) {
        console.log("failed to update miner profile", err);
        return null;
    }
}