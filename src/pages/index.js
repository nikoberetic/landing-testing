import algoliasearch from "algoliasearch/lite";
import {InstantSearch, ScrollTo, Hits, connectStats, Configure, Pagination} from "react-instantsearch-dom";
import Layout from '../components/Layout'
import Header from "../components/shared/header/Header";
import Hit from "../components/miner-list/hit/Hit";
import Footer from "../components/shared/footer/Footer";
import Filters from "../components/miner-list/filters/Filters";
import { useState } from "react";

const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY,
);
const Stats = ({ processingTimeMS, nbHits, nbSortedHits, areHitsSorted }) => (
    <div>
        <h2 className="py-5">Displaying <span className="text-gradient">{ nbHits }</span> datacenters</h2>
    </div>
);
const CustomStats = connectStats(Stats);


export default function Index() {

    const [ searchState, setSearchState ] = useState({});
    const [ filterVal, setFilterVal ] = useState('');
    const [ filterChanged, setFilterChanged ] = useState(false);

    
    const onSearchStateChange = (searchState) => {
        let page = searchState.page;
        if (filterChanged) {
            page = 1;
            setFilterChanged(false);
        }

        setSearchState({
                ...searchState,
                page,
            }
        )
    };

    return (
        <Layout>
            <Header showVerification={false} />
            <div className="container py-5">
                <div className="row pb-5">
                    <div className="col-12">
                        <InstantSearch
                            searchClient={searchClient}
                            indexName={ process.env.PROFILES_INDEX_NAME }
                            searchState={searchState}
                            onSearchStateChange={onSearchStateChange}
                        >
                            <ScrollTo>
                                <CustomStats  />
                            </ScrollTo>
                            <Filters
                                setFilterChanged={ setFilterChanged }
                                filterVal={ filterVal }
                                setFilterVal={ setFilterVal }
                                filtersList={['ISO_27001-2013', 'ISO_50001-2018', 'ASHRAE_TC9.9', 'APSAD_R7', 'APSAD_R5', 'APSAD_R4', 'HDS', 'Tier_III']}
                            />
                            <Configure
                                hitsPerPage={8}
                                filters={filterVal}
                            />
                            <Hits hitComponent={Hit} />
                            <Pagination
                                defaultRefinement={1}
                                showFirst={false}
                            />
                        </InstantSearch>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}