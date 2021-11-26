import Image from "next/image";
import {useState} from "react";

import close from '../../../public/img/close.svg';
import styles from "./lightbox.module.css";

export default function LightBox({...props}) {

    // console.log(props)

    const moveImage = (val) => {
        let newVal = props.id + val;
        if (newVal < 0) {
            newVal = props.images.length - 1;
        } else if ( newVal === props.images.length ) {
            newVal = 0;
        }
        props.openLightbox(newVal);
    }

    return (
        <div className={` ${styles.lightBox} ${props.toggleLightBox && styles.active} `}>
            {
                props.id !== -1 &&
                <>
                    <p className={ styles.legend }>
                        <span>{ props.id + 1 } / { props.images.length }</span>
                    </p>
                    <button type="button" onClick={props.closeLightbox} className={ styles.close }>
                        <Image src={close} alt="Close" />
                    </button>
                    <button type="button" onClick={ () => moveImage(-1) } className={`${ styles.navigation } ${ styles.left }`} />
                    <button type="button" onClick={ () => moveImage(1) } className={`${ styles.navigation } ${ styles.right }`} />
                    <div className={styles.imagesList}>
                        {
                            props.images.map((src, idx) => (
                                <div key={idx} className={` ${ styles.imageWrapper} ${props.id === idx && styles.active}`}>
                                    <div className={ styles.imageInner }>
                                        <Image
                                            src={ src }
                                            alt=""
                                            layout="fill"
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            }
        </div>
    );
}
