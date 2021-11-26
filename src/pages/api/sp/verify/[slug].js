import { verifyAddress } from "../../../../lotus-client";
import { getMinerProfile, updateMinerProfile } from "../../../../utils/algoliaClient";

const handler = async (req, res) => {
    alert('dasdsad')
    const { slug } = req.query;
    const profile = await getMinerProfile(slug);
    // todo use pubkey address
    const msg = req.body.hexMessage;
    const signature = req.body.signature;
    console.log(slug, msg, signature);
    const success = await verifyAddress(slug, 0, msg, signature); // TODO switch to pubkey addr

    if (success !== true) {
        res.status(403).json();
        return;
    }

    profile.isVerified = true;
    await updateMinerProfile(profile);
    res.status(201).json(profile);
}

export default handler;