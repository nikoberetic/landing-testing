import Image from "next/image";
import styles from './SlidingGallery.module.css';
import {useEffect, useRef, useState} from "react";
import leftArrow from '../../../public/img/uim_angle-left.svg';
import rightArrow from '../../../public/img/uim_angle-right.svg';

export default function SlidingGallery({images, verified}) {

    const [id, setId] = useState(0);
    const [newId, setNewId] = useState(0);
    const [animation, setAnimation] = useState(false);
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) {
            setAnimation(true);
            let timer1 = setTimeout(() => {
                setAnimation(false);
                setId(newId);
            }, 320);
            return () => {
                clearTimeout(timer1);
            };
        } else {
            isMounted.current = true;
        }
    },
        [newId]
    );


    const slideImage = (val, event) => {
        event.stopPropagation();
        let newVal = id + 1 * val;
        if (newVal < 0) { newVal = images.length - 1; } else if (newVal === images.length ) { newVal = 0; }
        setNewId(newVal);
    };

    return (
        <div className="position-relative">
            {/*<div className={'image-list ' + }>*/}
            {
                verified && <div className={ styles.verified }>Filgram verified</div>
            }
            <div className={`${ styles.imageList} ${( animation ? styles.animating : '')}`}>
                <Image src={images[id]} layout="fill" alt="" />
                <Image src={images[newId]} layout="fill" alt="" />
            </div>
            <div className={ styles.galleryNavigation }>
                <button type="button" onClick={ (event) => slideImage(-1, event) }>
                    <Image src={ leftArrow } alt="<" />
                </button>
                <button type="button" onClick={ (event) => slideImage(1, event) }>
                    <Image src={ rightArrow } alt=">" />
                </button>
            </div>
        </div>
    );
}
