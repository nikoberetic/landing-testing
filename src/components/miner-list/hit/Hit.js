import Link from "next/link";
import styles from './hit.module.css';
import Image from "next/image";
import SlidingGallery from "../sliding-gallery/SlidingGallery";
import {Highlight} from "react-instantsearch-dom";



export default function Hit({ hit }) {

    if (hit.hasOwnProperty('_tags')) {
        console.log('aaaaaa', hit)
    }

    return (
        <div className={ styles.hit }>
            <div className={ styles.hitSingle }>
                <Link
                    as={`/sp/${hit.id}`}
                    href={`/sp/[slug]`}
                >
                    <div className="d-flex flex-column flex-grow-1">
                        {
                            hit && hit['images'] && <SlidingGallery
                                images={hit['images']}
                                verified={hit.isVerified}
                            />
                        }
                        <div className={ styles.descWrapper }>
                            <div className={ styles.header }>
                                <div className={ styles.logoWrapper}>
                                    <Image src={ hit.minerLogo } width="40" height="40" alt="Logo" />
                                </div>
                                <div className="text-right">
                                    <h2 className="text-purple mt-2 mb-0">{ hit.capacityTB } PiB</h2>
                                    {/*<label className={`${styles.growth} ${styles.positive}`}>+27.32%</label>*/}
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
                                        <>
                                            {
                                                hit['_tags'].slice(0, 2).map((props, idx) => (
                                                    <label
                                                        key={idx}
                                                        className={ styles.more }
                                                    >
                                                        { props }
                                                    </label>
                                                ))
                                            }
                                            {
                                                hit['_tags'].length > 2 ?
                                                    <label
                                                        className={ styles.more }
                                                    >
                                                        +{ hit['_tags'].length - 2 }
                                                    </label>
                                                    :
                                                    null
                                            }
                                        </>
                                    :
                                    ''
                                }
                                {/*<label className={ styles.green }>Green</label>*/}
                                {/*<label className={ styles.blue }>ISO09908</label>*/}
                                {/*<label className={ styles.more }>+4</label>*/}
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