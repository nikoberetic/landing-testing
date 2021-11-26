import axios from "axios";

const FILTOOLS_DEALS_URL = "https://filecoin.tools/api/deals";
export const getDealsAPI = async (minerId, page = 1, perPage = 100) => {
    const targetUrl = `${FILTOOLS_DEALS_URL}/${minerId}/list?page=${page}&per_page=${perPage}&sort_by_column=status&sort_direction=-1`;
    try {
        const resp = await axios.get(targetUrl);
        return resp.data.Deals;
    } catch (err) {
        console.log(err);
        return [];
    }
}