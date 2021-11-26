import styles from "../../../pages/sp/profile.module.css";
import Image from "next/image";
import placeholderImage from "../../../../public/img/placeholderImage.svg";
import LightBox from "../lightbox/LightBox";
import {useState} from "react";

export default function Gallery({...props}) {

    const [ lightboxID, setLightboxID ] = useState(-1);
    const [ toggleLightBox, setToggleLightBox ] = useState(false);

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

    return (
        <>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-12">
                        {
                            props.algoliaInfo['images'] && props.algoliaInfo['images'].length > 5 ?
                                <div className={`${styles.imageGallery} ${styles.six}`}>
                                    { setGallery(props.algoliaInfo['images'], 6) }
                                </div>
                                :
                                props.algoliaInfo['images'] && props.algoliaInfo['images'].length > 0 && props.algoliaInfo['images'].length < 6 ?
                                    <div className={`${styles.imageGallery} ${styles.three}`}>
                                        { setGallery(props.algoliaInfo['images'], 3) }
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
            <LightBox
                id={ lightboxID }
                images={ props.algoliaInfo['images'] }
                closeLightbox={ closeLightbox }
                openLightbox={ openLightbox }
                toggleLightBox={ toggleLightBox }
            />
        </>
    );
}
