import algoliasearch from "algoliasearch/lite";
import { withInstantSearch } from "next-instantsearch";
import {
    Configure,
    Highlight,
    Hits,
    Pagination,
    RefinementList,
    SearchBox,
} from "react-instantsearch-dom";
import Link from "next/link";

const HitComponent = ({ hit }) => (
    <div className="hit">
        {/*<p>{JSON.stringify(hit)}</p>*/}
        {/*<div>*/}
        {/*    <div className="hit-picture">*/}
        {/*        <img src={`${hit.image}`} />*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="hit-content">
            <div className="hit-wrapper">
                <h5 className="mb-2">{ hit.name }</h5>
                <p className="small">{ hit.location }, { hit.region }</p>
                <Link
                    as={`/sp/${hit.id}`}
                    href={`/sp/[slug]`}
                >
                    {/*<a><Highlight attribute="name" hit={hit} /></a>*/}
                    <a className="btn btn-primary text-center mt-auto">View</a>
                </Link>

                {/*<span> - ${hit.price}</span>*/}
                {/*<span> - {hit.rating} stars</span>*/}
            </div>
            {/*<div className="hit-type">*/}
            {/*    <Highlight attribute="type" hit={hit} />*/}
            {/*</div>*/}
            {/*<div className="hit-description">*/}
            {/*    <Highlight attribute="description" hit={hit} />*/}
            {/*</div>*/}
        </div>
    </div>
);

const Page = () => (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Configure hitsPerPage={16} />
                    <header>
                        <div className="p-5 te">
                            <SearchBox />
                        </div>
                    </header>
                    <main>
                        <div className="menu">
                            <RefinementList attribute="categories" />
                        </div>
                        <div className="results">
                            <Hits hitComponent={HitComponent} />
                        </div>
                    </main>
                    <footer>
                        <Pagination />
                    </footer>
                </div>
            </div>
        </div>
    </>
);

const searchClient = algoliasearch(
    "E6YQUILULJ",
    "c2ac6e18abde19a94d2b2b51e1785108"
);

export default withInstantSearch({
    indexName: "filgram",
    searchClient,
})(Page);
