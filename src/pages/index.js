import Link from 'next/link'
import Layout from '../components/Layout'
import {profileFilePaths, parseProfileFromSource,} from '../utils/profileSourceUtils'
// import Search from "../components/Search";
// import { reindex } from '../utils/algoliaClient';
import Header from "../components/shared/header/Header";
import algoliasearch from "algoliasearch/lite";
import {InstantSearch, RefinementList, ScrollTo, Hits, SearchBox, Menu, ClearRefinements, connectStats, connectMenu, Configure, Pagination} from
        "react-instantsearch-dom";
import Hit from "../components/hit/Hit";
import {useEffect, useState} from "react";

const SHOULD_REINDEX = process.env.SHOULD_REINDEX || false;
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



const MenuSelect = ({ items, currentRefinement, refine }) => {
    return (
        <select
            value={currentRefinement || ''}
            onChange={event => refine(event.currentTarget.value)}
        >
            <option value="">See all options</option>
            {
                items.map((item, index) => (
                    <option
                        datatype={index}
                        key={item.label}
                        value={item.isRefined ? currentRefinement : item.value}
                    >
                        {item.label}
                    </option>
                ))
            }
        </select>
    )
};
const CustomMenuSelect = connectMenu(MenuSelect);


























export default function Index() {

    const [ filterVal, setFilterVal ] = useState('');
    // const [ paginationPage, setPaginationPage ] = useState('');

    const clearFilter = () => {
        let elements = document.getElementsByClassName('filter-button active');
        while(elements.length > 0){
            elements[0].classList.remove('active');
        }
        setFilterVal('');
    };
    const setFilterValFunc = (event, val) => {

        event.target.classList.toggle("active");

        console.log(event.target.className)
        // console.log(0, filterVal)
        let uglyStr = '';
        uglyStr = filterVal;

        // console.log(1, uglyStr);
        if (uglyStr.includes(val)) {
            uglyStr = uglyStr.replace(val, '');
        } else {
            uglyStr = uglyStr + ' AND ' + val;
        }

        // If starts with AND
        if (uglyStr.lastIndexOf(' AND ', 0) === 0) {
            uglyStr = uglyStr.slice(5);
        }
        // If ends with AND
        if (uglyStr.substring(uglyStr.length - 5) === ' AND ') {
            uglyStr = uglyStr.slice(0, -5);
        }

        uglyStr = uglyStr.replaceAll(' AND  AND ', ' AND ');

        // console.log(2, uglyStr);
        setFilterVal(uglyStr);
    };


    return (
        <Layout>
            <Header />
            <div className="container py-5">
                <div className="row pb-5">
                    <div className="col-12">

                        <InstantSearch
                            searchClient={searchClient}
                            indexName={ process.env.PROFILES_INDEX_NAME }
                            // indexName="demo_ecommerce"
                            // searchableAttributes={['region']}
                            // searchState={searchState}
                        >
                            <ScrollTo>
                                <CustomStats  />
                            </ScrollTo>
                            <div className="d-flex align-items-centerc flex-wrap pb-3 mb-4">
                                <button type="button" className="filter-button" onClick={clearFilter}>Clear</button>
                                <button type="button" className="filter-button" onClick={(event) => setFilterValFunc(event, 'ISO_27001-2013')}>ISO 27001:2013</button>
                                <button type="button" className="filter-button" onClick={(event) => setFilterValFunc(event, 'HDS')}>HDS</button>
                                <button type="button" className="filter-button" onClick={(event) => setFilterValFunc(event, 'ISO_50001-2018')}>ISO 50001:2018</button>
                                <button type="button" className="filter-button" onClick={(event) => setFilterValFunc(event, 'Tier_III')}>Tier III</button>
                                <button type="button" className="filter-button" onClick={(event) => setFilterValFunc(event, 'ASHRAE_TC9.9')}>ASHRAE TC9.9</button>
                                <button type="button" className="filter-button" onClick={(event) => setFilterValFunc(event, 'APSAD_R7')}>APSAD R7</button>
                                <button type="button" className="filter-button" onClick={(event) => setFilterValFunc(event, 'APSAD_R4')}>APSAD R4</button>
                                <button type="button" className="filter-button" onClick={(event) => setFilterValFunc(event, 'APSAD_R5')}>APSAD R5</button>
                            </div>
                            {/*<ClearRefinements />*/}


                            {/*<RefinementList attribute="region" />*/}
                            {/*<RefinementList attribute="location" />*/}
                            {/*<RefinementList attribute="brand" />*/}
                            {/*<Menu attribute="capacityTB" />*/}
                            {/*<MenuSelect attribute="region" />*/}
                            {/*<CustomMenuSelect attribute="capacityTB" />*/}
                            {/*<CustomMenuSelect attribute="location" />*/}
                            {/*<CustomMenuSelect attribute="legalEntity.GDPR" />*/}
                            {/*<SearchBox />*/}
                            {/*<RefinementList attribute="legalEntity.GDPR" />*/}
                            {/*<RefinementList*/}
                            {/*    attribute="region"*/}
                            {/*    // defaultRefinement={['Asia']}*/}
                            {/*/>*/}
                            {/*<RefinementList attribute="name" />*/}
                            {/*<RefinementList attribute="region" />*/}
                            {/*<Menu attribute="id" />*/}

                            {/*<Menu attribute="region" />*/}


                            {/*<MenuSelect*/}
                            {/*    attribute="capacityTB"*/}
                            {/*    transformItems={items =>*/}
                            {/*        items.map(item => ({*/}
                            {/*            ...item,*/}
                            {/*            label: item.label + 'dsahkjdashkjdb',*/}
                            {/*        }))*/}
                            {/*    }*/}
                            {/*    // transformItems={items => items.filter(e =>*/}
                            {/*    //     refineList.indexOf(e.label) >= 0)}*/}
                            {/*/>*/}


                            {/*<RefinementList attribute="region" />*/}
                            {/*<Menu attribute="region" />*/}
                            <Configure
                                hitsPerPage={24}
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
            {/*<h1>Filgram</h1>*/}
            {/*<p>Click the link below to navigate to a miner profile </p>*/}
            {/*/!*<Search />*!/*/}
            {/*<ul>*/}
            {/*    {profiles.map((p) => (*/}
            {/*        <li key={p.filePath}>*/}
            {/*            <Link*/}
            {/*                as={`/sp/${p.filePath.replace(/\.json?$/, '')}`}*/}
            {/*                href={`/sp/[slug]`}*/}
            {/*            >*/}
            {/*                <a>{p.profile.name}</a>*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {/*<Search />*/}
        </Layout>
    )
}

export function getStaticProps() {
    const startDate = new Date().getMilliseconds();
    const startDateStr = startDate.toString();
    const profiles = profileFilePaths("json").map((filePath) => {
        const profile = parseProfileFromSource(filePath)
        return {
            profile,
            filePath,
        }
    });
    const endDate = new Date().getMilliseconds();
    const endDateStr = endDate.toString();
    const timeDiff = endDate - startDate;
    if(SHOULD_REINDEX){
        // reindex(profiles);
    }

    return {props: {profiles}}
}
