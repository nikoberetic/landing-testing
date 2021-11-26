import Image from "next/image";

import close from '../../../public/img/close.svg';
import styleslightBox from "../miner-profile/lightbox/lightbox.module.css";
import styles from "../../pages/sp/profile.module.css";

export default function ModalDealInfo({...props}) {

    const DealID = props.modalDealObj.DealID;
    const Proposal = props.modalDealObj['DealInfo']['Proposal'];
    // const Proposal = DealInfo['Proposal'];

    console.log(props.modalDealObj)
    return (
        <div className={` ${'modalEl'} ${props.showModalDeals && 'active'} `}>
            <div className="modalEl-inner small">
            {
                props.showModalDeals &&
                    <div className="pt-0">
                        <button type="button" onClick={props.toggleModalDeals} className={ styleslightBox.close }>
                            <Image src={close} alt="Close" />
                        </button>
                        <h5 className="pb-3 mb-4">Deal details</h5>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>DealID: <span className="text-gray-dark font-weight-normal deal-details">{ DealID }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>Client: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['Client'] }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>ClientCollateral: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['ClientCollateral'] }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>Label: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['Label'] }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>PieceCID: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['PieceCID']['/'] }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>VerifiedDeal: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['VerifiedDeal'] ? 'Yes' : 'No' }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>StartEpoch: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['StartEpoch'] }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>EndEpoch: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['EndEpoch'] }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>StoragePricePerEpoch: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['StoragePricePerEpoch'] }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>PieceSize: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['PieceSize'] }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>Provider: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['Provider'] }</span></p>
                        <p className={` ${ styles.infoLabel } ${ 'd-flex align-items-center justify-content-between mb-2' } `}>ProviderCollateral: <span className="text-gray-dark font-weight-normal deal-details">{ Proposal['ProviderCollateral'] }</span></p>
                    </div>
            }
            </div>
        </div>
    );
}
