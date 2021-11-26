import { LotusRPC } from "@filecoin-shipyard/lotus-client-rpc";
import { NodejsProvider } from "@filecoin-shipyard/lotus-client-provider-nodejs";
import { mainnet } from "@filecoin-shipyard/lotus-client-schema";

const protocol = "https";
const nodeAPI = 'node.glif.io/space07/lotus/rpc/v0';
const endpointUrl = `${protocol}://${nodeAPI}`;
const nodeJwt = process.env.NODE_JWT;

const connTypeSchemaMap = {
    "node": mainnet.fullNode,
    "miner": mainnet.storageMiner,
}

const getClient = (connType) => {
    const schema = connTypeSchemaMap[connType];
    const provider = new NodejsProvider(endpointUrl, { "token": nodeJwt });
    return new LotusRPC(provider, { schema: schema })
}

const fullNodeClient = getClient("node");
const storageClient = getClient("miner");

export const getDeals = async () => {
    const tipSet = await fullNodeClient.chainHead();
    const deals = await fullNodeClient.stateMarketDeals(tipSet.Cids);
    return deals;
}

export const verifyAddress = async (address, addrType, randomString, signature) => {
    try {
        const s = {
            Data: signature,
            Type: addrType,
        }
        return await fullNodeClient.walletVerify(address, randomString, s);
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const getParticipants = async () => {
    return await fullNodeClient.stateMarketParticipants([]);
}
