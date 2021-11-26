import { getMinerProfile, updateMinerProfile } from "../../../../utils/algoliaClient";

const handler = async (req, res) => {
    const { slug } = req.query;
    const profile = await getMinerProfile(slug);
    const images = req.body;
    profile.images = images;
    await updateMinerProfile(profile);
    res.status(201).json(profile);
}

export default handler;