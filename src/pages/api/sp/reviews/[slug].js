import { getMinerProfile, updateMinerProfile } from "../../../../utils/algoliaClient";

const handler = async (req, res) => {
    const { slug } = req.query;
    const profile = await getMinerProfile(slug);
    const review = req.body;
    if (profile.reviews) {
        profile.reviews.push(review);
    } else {
        profile.reviews = [review];
    }
    await updateMinerProfile(profile);
    res.status(201).json(profile);
}

export default handler;