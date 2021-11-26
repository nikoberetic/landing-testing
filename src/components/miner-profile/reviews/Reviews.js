import useSWR from "swr"
import styles from "../../../pages/sp/profile.module.css";
import Image from "next/image";
import stars from "../../../../public/img/zvezdrice.svg";

export default function Reviews({...props}) {

    function Review (props) {
        let unix_timestamp = props.timestamp
        let date = new Date(unix_timestamp * 1000);
        let formattedDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();

        return (
            <li className={ styles.review }>
                <div className={ styles.fullBG }>
                    <div className={ styles.rating } style={{ width: `${'73'+'%'}` }} />
                    <Image src={ stars } width="100" height="15" alt="" />
                </div>
                <h5 className="pt-3 pb-1 mb-3">{ props.title }</h5>
                <p className="mb-0">{ props.description }</p>
                <div className="pt-3">
                    <div className="row">
                        <div className="col-lg-4">
                            <label className={ styles.infoLabel }>Date: </label>
                            <span className="text-gray-dark font-weight-medium mb-0"> { formattedDate }</span>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    return (
        <ul className={styles.reviewsWrapper}>
            {
                props.algoliaInfo['reviews'] && props.algoliaInfo['reviews'].map((props, idx) => (
                    <Review
                        key={idx}
                        {...props}
                    />
                ))
            }
        </ul>
    );
}
