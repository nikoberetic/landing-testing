import {useRouter} from 'next/router'
import {useCallback, useEffect, useState} from "react";
import {getProfilesIndex} from "../../utils/algoliaClient";
import Head from 'next/head'
import Image from "next/image";
import Layout from '../../components/Layout'
import Header from "../../components/shared/header/Header";
import Deals from "../../components/miner-profile/deals/Deals";
import Footer from "../../components/shared/footer/Footer";
import ModalVerifyProfile from "../../components/modals/ModalVerifyProfile";
import Gallery from "../../components/miner-profile/image-gallery/gallery";
import Reviews from "../../components/miner-profile/reviews/Reviews";
import styles from './profile.module.css';
// Resources
import signature from '/public/img/signature.svg';
import slack from "../../../public/img/slack.svg";
import location from "../../../public/img/location.svg";
import starGray from "../../../public/img/star-gray.svg";
import placeholderImage from "../../../public/img/placeholderImage.svg";



export default function ProfilePage() {

    const router = useRouter()
    const [minerID, setMinerID] = useState();
    const [tab, setTab] = useState(0);
    const [algoliaInfo, setAlgoliaInfo] = useState([]);
    const [showModalVerify, setShowModalVerify] = useState(false);

    const getProfileData = useCallback(async (id) => {
        const index = getProfilesIndex();
        await index.getObject(id, {
        }).then(object => {
            setAlgoliaInfo(object);
        })
    }, [])

    useEffect(()=>{
        if(!router.isReady) return;
        setMinerID(router.query.slug);
        getProfileData(router.query.slug).then()
    }, [router.isReady]);

    const setTabValue = (val) => {
        setTab(val);
    };
    const toggleModalVerify = () => {
        setShowModalVerify(!showModalVerify);
    };

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Head>
                <title>{algoliaInfo.name}</title>
                <meta property="og:image" content={algoliaInfo['minerLogo']} />
                <meta property="twitter:image" content={algoliaInfo['minerLogo']} />
            </Head>
            <Layout>
                <Header
                    showVerification={true}
                    toggleModalVerify={toggleModalVerify}
                />
                <div className="container pt-5 pb-4">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className={ styles.profileDesc }>
                                <div className="d-flex flex-column flex-sm-row align-items-center">
                                    <div className={` ${styles.profileLogo} ${'mr-0 mb-4 mb-sm-0'} `}>
                                        <Image src={ algoliaInfo['minerLogo'] ? algoliaInfo['minerLogo'] : placeholderImage } width="60" height="60" alt="Logo" />
                                    </div>
                                    <div className="pl-sm-1 ml-sm-3">
                                        <div className="d-flex">
                                            <h1 className={`${styles.h1} ${'mb-1'}`}>{ algoliaInfo.name }</h1>
                                            {/*<Image src="" alt="" />*/}
                                        </div>
                                        <label className={`${styles.infoLabel} ${'mb-2'}`}>{ minerID }</label>
                                        <ul className={ styles.adventages }>
                                            { algoliaInfo['_tags'] &&
                                                Object.keys(algoliaInfo['_tags']).map((key) =>
                                                    <li key={key}>{ algoliaInfo['_tags'][key].replace('_', ' ').replace('-', '') }</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-4 pt-sm-5">
                                    <div className="row">
                                        {/*<div className="col-lg-4">*/}
                                        {/*    <label className={ styles.infoLabel }>MWh purchased</label>*/}
                                        {/*    <p className={ styles.clasic }>5200</p>*/}
                                        {/*</div>*/}
                                        <div className="col-lg-4">
                                            <label className={ styles.infoLabel }>Storage power</label>
                                            <p className={ styles.storage }>{ algoliaInfo.capacityTB } PiB</p>
                                        </div>
                                        {/*<div className="col-lg-4">*/}
                                        {/*    <label className={ styles.infoLabel }>Monthly increase</label>*/}
                                        {/*    <p className={ styles.growth }>+27.03%</p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <h4 className="mt-4 mb-4">About</h4>
                            <p>{ algoliaInfo.about }</p>
                            <div className="row pt-4">
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <h5 className="font-weight-normal mb-1">94%</h5>
                                    <div className={ styles.succRateWrapper }>
                                        <span style={{ width: `${'94'+'%'}` }} />
                                    </div>
                                    <label className={`${styles.infoLabel} ${'mt-1'}`}>Deal success rate</label>
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
                                { algoliaInfo.isVerified &&
                                    <div className="col-lg-4">
                                        <span className={ styles.verified } >Verified profile</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Gallery algoliaInfo={algoliaInfo} />
                <div className="container pb-5">
                    <div className="row pb-5">
                        <div className="col-12 pb-4 mb-3">
                            <ul className={ styles.tabs }>
                                <li className={ (tab === 0 ? styles.singleTabActive : styles.singleTab)}>
                                    <button className="ml-0" type="button" onClick={() => setTabValue(0)}>
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
                            <div className={ styles.tabsContent }>
                                <div className={tab === 0 ? styles.showTab : ''}>
                                    { minerID &&
                                        <Deals id={minerID} />
                                    }
                                </div>
                                <div className={tab === 1 ? styles.showTab : ''}>
                                    <Reviews algoliaInfo={algoliaInfo} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <ModalVerifyProfile
                    showModalVerify={showModalVerify}
                    toggleModalVerify={ toggleModalVerify }
                />
            </Layout>
        </>
    )
}