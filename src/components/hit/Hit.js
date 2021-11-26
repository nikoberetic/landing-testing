import Link from "next/link";
import styles from './hit.module.css';
import Image from "next/image";
import SlidingGallery from "../sliding-gallery/SlidingGallery";
import {Highlight} from "react-instantsearch-dom";


const images = [
    {
        "images": [
            "https://i.postimg.cc/V6hZ5y8m/png-clipart-mining-industry-decal-computer-software-training-others-service-logo.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        ]
    }
]
const tags = [
    {
        "tags": [
            "Green",
            "ISO09908",
            "ISO09908",
            "ISO09908",
            "ISO09908",
        ]
    }
]



export default function Hit({ hit }) {

    if (hit.hasOwnProperty('_tags')) {
        console.log(hit)
    }

    return (
        <div className={ styles.hit }>
            {/*<p>{JSON.stringify(hit)}</p>*/}
            {/*<div>*/}
            {/*    <div className="hit-picture">*/}
            {/*        <img src={`${hit.image}`} />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={ styles.hitSingle }>
                <Link
                    as={`/sp/${hit.id}`}
                    href={`/sp/[slug]`}
                >
                    <div className="d-flex flex-column flex-grow-1">
                        <SlidingGallery
                            images={images[0]['images']}
                            verified={true}
                        />
                        <div className={ styles.descWrapper }>
                            <div className={ styles.header }>
                                <div className={ styles.logoWrapper}>
                                    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" width="50" height="50" alt="Logo" />
                                </div>
                                <div className="text-right">
                                    <h2 className="text-purple mt-2 mb-0">200TiB</h2>
                                    <label className={`${styles.growth} ${styles.positive}`}>+27.32%</label>
                                    {/*<label className={`${styles.growth} ${styles.negative}`}>+27.32%</label>*/}
                                </div>
                            </div>
                            <h5 className="mb-2 min-height-32">{ hit.name }</h5>
                            <p className={`${styles.minerID} ${'mb-4'}`}>ID: { hit.id }</p>
                            <p className="text-gray-dark pt-1 mt-auto mb-2">Badges</p>
                            {/*<a><Highlight attribute="name" hit={hit} /></a>*/}
                            <div className={ styles.tags }>
                                {
                                    hit.hasOwnProperty('_tags') ?
                                        hit['_tags'].slice(0, 2).map((props, idx) => (
                                            <label
                                                key={idx}
                                                className={ styles.more }
                                            >
                                                { props }
                                            </label>
                                        ))
                                    :
                                    ''
                                }
                                <label className={ styles.green }>Green</label>
                                <label className={ styles.blue }>ISO09908</label>
                                <label className={ styles.more }>+4</label>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            {/*<div className="hit-type">*/}
            {/*    <Highlight attribute="type" hit={hit} />*/}
            {/*</div>*/}
            {/*<div className="hit-description">*/}
            {/*    <Highlight attribute="description" hit={hit} />*/}
            {/*</div>*/}
            {/*<div className="hit-description">*/}
            {/*    <Highlight attribute="location" hit={hit} />*/}
            {/*</div>*/}
        </div>
    )
}