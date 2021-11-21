import Link from 'next/link'
import { useRouter } from 'next/router'
import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import Layout from '../../components/Layout'
// import {
//     profileFilePaths,
//     parseProfileFromSource,
// } from '../../utils/profileSourceUtils'
import Header from "../../components/shared/header/Header";
import styles from './profile.module.css';
// Resources
import profilePicture from '/public/img/img.png';
import coverImg from '/public/img/data-center.jpg';
import checkGreen from '/public/img/check-green.svg';
import externalLinkOutline from '/public/img/external-link-outline.svg';
import signature from '/public/img/signature.svg';
import slack from "../../../public/img/slack.svg";
import location from "../../../public/img/location.svg";
import starGray from "../../../public/img/star-gray.svg";
import stars from "../../../public/img/5zv.svg";
import placeholderImage from "../../../public/img/placeholderImage.svg";
import LightBox from "../../components/lightbox/LightBox";
import {getProfilesIndex} from "../../utils/algoliaClient";
import Deals from "../../components/deals/Deals";


const images = [
    {
        "images": [
            "https://i.postimg.cc/V6hZ5y8m/png-clipart-mining-industry-decal-computer-software-training-others-service-logo.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            "https://i.postimg.cc/V6hZ5y8m/png-clipart-mining-industry-decal-computer-software-training-others-service-logo.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        ]
    }
]
const List = [
    {
        title: 'Resource utilization',
        img: 'resource-utilization.svg'
    },
    {
        title: 'Sealing performance',
        img: 'sealing-performance.svg'
    },
    {
        title: 'Mining efficiency',
        img: 'mining-efficiency.svg'
    },
    {
        title: 'Gas cost',
        img: 'gas-cost.svg'
    },
    {
        title: 'Always up to date',
        img: 'up-to-date.svg'
    },
];



export default function ProfilePage() {

    const router = useRouter()
    const [tab, setTab] = useState(0);
    const [algoliaInfo, setAlgoliaInfo] = useState([]);
    const [lightboxID, setLightboxID] = useState(-1);
    const [ toggleLightBox, setToggleLightBox ] = useState(false);

    const fetchMyAPI = useCallback(async () => {
        const index = getProfilesIndex();
        // const minerID = router.query.slug.toString();
        await index.getObject('1345c0c660328f_dashboard_generated_id', {
        }).then(object => {
            setAlgoliaInfo(object);
        })
    }, [])
    let tags = algoliaInfo['_tags'];
    if ( tags === undefined ) {
        tags = [];
    }

    useEffect(() => {
        fetchMyAPI().then()
        console.log('dnsakdnlaksn')
    }, [fetchMyAPI])

    const setTabValue = (val) => {
        setTab(val);
    };
    const openLightbox = (id) => {
        setLightboxID(id);
        setToggleLightBox(true);
    };
    const closeLightbox = () => {
        setToggleLightBox(false);
        let timer1 = setTimeout(() => {
            setLightboxID(-1);
        }, 320);
        return () => {
            clearTimeout(timer1);
        };
    };

    const setGallery = (array, num) => {
        return (
            array.slice(0, num).map((props, idx) => (
                <div
                    key={idx}
                    className={ styles.galleryItem }
                    onClick={ () => openLightbox(idx) }
                >
                    <Image src={props} layout="fill" alt="Logo" />
                </div>
            ))
        )
    };

    if (router.isFallback) {
        return <div>Loading...</div>
    }


    function Review (props) {
        return (
            <li className={ styles.review }>
                <div className="">
                    <div className="">
                        <Image src={ stars } alt="" />
                    </div>
                </div>
                <h5 className="pb-1 mb-3">Amazing cooperation, great deals</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie justo sed velit egestas, ut ornare ligula iaculis. Donec suscipit enim at efficitur fringilla. Aenean ultricies lorem et neque venenatis, non tincidunt elit posuere. Sed ut metus tellus. Aenean ultricies lorem et neque venenatis.</p>
                <div className="pt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <label className={ styles.infoLabel }>Date</label>
                            <p className="mb-0">17 Sep 2021.</p>
                        </div>
                        <div className="col-lg-4">
                            <label className={ styles.infoLabel }>See this deal</label>
                            <div className="d-flex align-items-center">
                                <p className="mr-2 mb-0">f0fda58630310...</p>
                                <Link href="https://www.google.com">
                                    <a target="_blank">
                                        <Image src={ externalLinkOutline } alt="" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
    return (
        <Layout>
            <Header />
            <div className="container pt-5 pb-4">
                <div className="row">
                    <div className="col-lg-5">
                        <div className={ styles.profileDesc }>
                            <div className="d-flex flex-column flex-sm-row align-items-center">
                                <div className={` ${styles.profileLogo} ${'mr-auto mb-4 mb-sm-0'} `}>
                                    <Image src={'https://i.postimg.cc/V6hZ5y8m/png-clipart-mining-industry-decal-computer-software-training-others-service-logo.png'} width="64" height="64" alt="Logo" />
                                </div>
                                <div className="pl-sm-1 ml-sm-3">
                                    <div className="d-flex">
                                        <h1>{ algoliaInfo.name }</h1>
                                        {/*<Image src="" alt="" />*/}
                                    </div>
                                    <ul className={ styles.adventages }>
                                        {
                                            Object.keys(tags).map((key) =>
                                                <li key={key}>{ tags[key].replace('_', ' ').replace('-', '') }</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-4 pt-sm-5">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className={ styles.infoLabel }>MWh purchased</label>
                                        <p className={ styles.clasic }>5200</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className={ styles.infoLabel }>Storage power</label>
                                        <p className={ styles.storage }>{ algoliaInfo['capacityTB'] } TiB</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className={ styles.infoLabel }>Monthly increase</label>
                                        <p className={ styles.growth }>+27.03%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <h6 className="mt-4 mb-4">About</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie justo sed velit egestas, ut ornare ligula iaculis.<br />Donec suscipit enim at efficitur fringilla. Aenean ultricies lorem et neque venenatis, non tincidunt elit posuere. Sed ut metus tellus.</p>
                        <div className="row pt-4">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <h4 className="mb-3">18 deals</h4>
                                <h5 className="font-weight-normal mb-1">94%</h5>
                                <div className={ styles.succRateWrapper }>
                                    <span style={{ width: `${'94'+'%'}` }} />
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="d-flex align-items-center pb-1 mb-2">
                                    <Image src={ location } alt="Location" />
                                    <p className="text-gray-dark mb-0 ml-2">{ algoliaInfo.location }, { algoliaInfo.region }</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Image src={ slack } alt="Location" />
                                    <p className="text-gray-dark mb-0 ml-2">vvk</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <span className={ styles.verified } >Filgram verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-12">
                        {
                            images[0]['images'].length > 5 ?
                                <div className={`${styles.imageGallery} ${styles.six}`}>
                                    { setGallery(images[0]['images'], 6) }
                                </div>
                                :
                                images[0]['images'].length > 0 && images[0]['images'].length < 6 ?
                                    <div className={`${styles.imageGallery} ${styles.three}`}>
                                        { setGallery(images[0]['images'], 3) }
                                    </div>
                                    :
                                    <div className={`${styles.imageGallery} ${styles.placeholder}`}>
                                        <div className={ styles.galleryItem }>
                                            <Image src={ placeholderImage } layout="fill" alt="" />
                                        </div>
                                    </div>

                        }
                    </div>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row pb-5">
                    <div className="col-12 pb-4 mb-3">
                        <ul className={ styles.tabs }>
                            <li className={ (tab === 0 ? styles.singleTabActive : styles.singleTab)}>
                                <button className="" type="button" onClick={() => setTabValue(0)}>
                                    <Image src={ signature } alt="" />
                                    <span className="ml-1">Deals</span>
                                </button>
                            </li>
                            <li className={ (tab === 1 ? styles.singleTabActive : styles.singleTab)}>
                                <button className="" type="button" onClick={() => setTabValue(1)}>
                                    <Image src={ starGray } alt="" />
                                    <span className="ml-1">Reviews</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <ul className={styles.reviewsWrapper}>
                            {
                                tab === 1 ?
                                    List.map((props, idx) => (
                                        <Review
                                            key={idx}
                                            {...props}
                                        />
                                    ))
                                    :
                                    <div className="">
                                        <Deals
                                            id={'f01024814'} // ID Minera
                                        />
                                        {/*<h5 className="pt-2 pb-2 mb-4">Storage deal stats</h5>*/}
                                        {/*<div className="d-flex pb-3 mb-4 flex-column flex-lg-row">*/}
                                        {/*    <div className="d-inline-flex flex-column pr-lg-5 mb-4 mb-lg-0">*/}
                                        {/*        <label className={ styles.infoLabel }>Average deal price</label>*/}
                                        {/*        <p className={ styles.clasic }>13.39 nanoFIL</p>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="d-inline-flex flex-column px-lg-5 mb-4 mb-lg-0">*/}
                                        {/*        <label className={ styles.infoLabel }>Amount of data stored</label>*/}
                                        {/*        <p className={ styles.clasic }>42.14 TB / 572.46 TB</p>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="d-inline-flex flex-column pl-lg-5">*/}
                                        {/*        <label className={ styles.infoLabel }>Deal success rate</label>*/}
                                        {/*        <p className={ styles.clasic }>94%</p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<p className={` ${ styles.infoLabel } ${ 'mb-1' } `}>Total number of storage deals: <span className="text-gray-dark font-weight-normal">2760</span></p>*/}
                                        {/*<p className={` ${ styles.infoLabel } ${ 'mb-1' } `}>Number of successful storage deals: <span className="text-gray-dark font-weight-normal">2760</span></p>*/}
                                        {/*<p className={` ${ styles.infoLabel } ${ 'mb-1' } `}>Number of times slashed: <span className="text-gray-dark font-weight-normal">0</span></p>*/}
                                        {/*<p className={` ${ styles.infoLabel } ${ 'mb-1' } `}>Number of terminated deals: <span className="text-gray-dark font-weight-normal">0</span></p>*/}
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <LightBox
                id={ lightboxID }
                images={ images[0]['images'] }
                closeLightbox={ closeLightbox }
                openLightbox={ openLightbox }
                toggleLightBox={ toggleLightBox }
            />
        </Layout>
    )
}



// const algoliasearch = require('algoliasearch');
//
// const searchClient = algoliasearch(
//     "E6YQUILULJ",
//     "c2ac6e18abde19a94d2b2b51e1785108",
// );
// const index = searchClient.initIndex('figram');
// const minerID = params.slug;
// let profile = [];
// index.getObjects(['1ftgMydYe5zCD9xgELFp3hJBG4R'], {
//     attributesToRetrieve: ['*']
// }).then(({ results }) => {
//     console.log('results', results);
//     // profile = results;
// });



// export const getStaticProps = async ({ params }) => {
//     const profile = parseProfileFromSource(`${params.slug}.json`)
//
//     return {
//         props: {
//             profile,
//         },
//         // revalidate: PROFILE_TTL, // re-render every 3600 seconds
//     }
// }
//
// export const getStaticPaths = async () => {
//     const paths = profileFilePaths('json')
//         // Remove file extensions for page paths
//         .map((path) => path.replace(/\.json$/, ''))
//         // Map the path into the static paths object required by Next.js
//         .map((slug) => ({ params: { slug } }))
//
//     return {
//         paths: paths,
//         fallback: false,
//     }
// }


// export const getStaticPaths = async () => {
//   return {
//     paths: [], // do not perform static rendering in build time
//     fallback: true,
//   }
// }