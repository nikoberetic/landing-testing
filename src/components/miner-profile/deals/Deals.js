import {useEffect, useState} from "react";
import styles from "../../../pages/sp/profile.module.css";
import {useRouter} from "next/router";
import ModalDealInfo from "../../modals/ModalDealInfo";
import Image from "next/image";
import externalLinkOutline from "../../../../public/img/external-link-outline.svg";
import externalLinkOutlineHover from "../../../../public/img/external-link-outline-hover.svg";

export default function Deals({...props}) {

    const router = useRouter()
    const [ page, setPage ] = useState(1);
    const [ deals, setDeals ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ modalDealObj, setModalDealObj ] = useState(false);
    const [ showModalDeals, setShowModalDeals ] = useState(false);

    const toggleModalDeals = (d = []) => {
        setShowModalDeals(!showModalDeals);
        setModalDealObj(d);
    };


    async function fetchAnotherPage() {
        setLoading(true);
        await fetch('https://filecoin.tools/api/deals/' + props.id + '/list?page=' + page + '&per_page=' + 10)
            .then((response) => response.json())
            .then((responseJSON) => {
                setDeals(responseJSON['Deals']);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchAnotherPage().then()
    }, [page]);

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const changePage = (val) => {
        setPage(page + val);
    }
    const listDeals = deals.map((d, id) => {
        const proposal = d.DealInfo.Proposal;
        const provider = proposal['Provider'];
        const StartEpoch = proposal['StartEpoch'];
        const EndEpoch = proposal['EndEpoch'];
        const verified = proposal['VerifiedDeal'];
        return (

            <div key={id} className={` ${ styles.dealSingle} ${ 'pb-5 mb-5' } `} >
                <h5 className={` ${ styles.pieceLabel } ${ 'pb-2 mb-4' }`} >Deal: { d.DealID }</h5>
                <div className="d-flex flex-column flex-lg-row">
                    <div className="d-inline-flex flex-column pr-lg-5 mb-4 mb-lg-0">
                        <label className={ styles.infoLabel }>Provider</label>
                        <p className={ styles.clasic }>{ provider }</p>
                    </div>
                    <div className="d-inline-flex flex-column px-lg-5 mb-4 mb-lg-0">
                        <label className={ styles.infoLabel }>StartEpoch / EndEpoch</label>
                        <p className={ styles.clasic }>{ StartEpoch } / { EndEpoch }</p>
                    </div>
                    <div className="d-inline-flex flex-column px-lg-5 mb-4 mb-lg-0">
                        <p className="mb-0"><label className={ styles.infoLabel }>See this deal</label></p>
                        <button type="button" className="no-style" onClick={() => toggleModalDeals(d)}>
                            <a target="_blank" className={ styles.externalLink }>
                                <Image src={ externalLinkOutline } alt="" />
                                <Image src={ externalLinkOutlineHover } alt="" />
                            </a>
                        </button>
                    </div>
                    { verified ?
                        <div className="d-inline-flex flex-column pt-1 pl-lg-5">
                            <span className={ styles.verified } >Verified</span>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        )
    })

    return (
        <>
            <div className={ styles.reviewsWrapper }>
                { loading ?
                    <div className={ styles.slider }>
                        <div className={ styles.line } />
                        <div className={` ${styles.subline} ${styles.dec} `} />
                    </div>
                    :
                    listDeals
                }
            </div>
            <div className={` ${ styles.navigation } ${'mt-5'} `}>
                <button type="button" className="mr-3" onClick={ () => changePage(-1) } disabled={ page < 2 || loading } />
                <button type="button" onClick={ () => changePage(1) } disabled={ deals.length < 10 || loading } />
            </div>
            { showModalDeals &&
                <ModalDealInfo
                    showModalDeals={showModalDeals}
                    modalDealObj={modalDealObj}
                    toggleModalDeals={ toggleModalDeals }
                />
            }
        </>
    );
}
