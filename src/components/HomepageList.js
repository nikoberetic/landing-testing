import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './HomepageList.module.css';
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";



const List = [
    {
        title: 'Resource utilization',
        img: 'undraw_docusaurus_mountain.svg'
    },
    {
        title: 'Sealing performance',
        img: 'temp1.svg'
    },
    {
        title: 'Mining efficiency',
        img: 'undraw_docusaurus_react.svg'
    },
    {
        title: 'Gas cost',
        img: 'undraw_docusaurus_tree.svg'
    },
    {
        title: 'Always up to date',
        img: 'temp1.svg'
    },
];



function Item(props) {
    return (
        <li className="mb-2">
            <button className="btn-no-style" onClick={() => props.seShowingImgID(props.id)}>
                <span className={clsx(styles.item, (props.shownImg === props.id && styles.itemActive))}>{props.title}</span>
            </button>
        </li>
    );
}
function RelatedImg(props) {
    return (
        <div className={clsx(styles.itemImage, (props.shownImg === props.id && styles.itemImageActive)) }>
            <img className={styles.imgElem} src={useBaseUrl(`/img/${props.img}`)} alt="" />
        </div>
    );
}

export default function HomepageList() {

    const [shownImg, setShownImg] = useState(0);

    const seShowingImgID = (id) => {
        setShownImg(id);
    };

    return (
        <div className="container container--short py-5">
            <div className="row py-md-5">
                <div className="col-12 pb-1">
                    <h2 className="color-1 pb-2 mb-4">Why should you choose Filmine?</h2>
                </div>
                <div className="col-md-6">
                    <ul className={styles.listAdvantages}>
                        {List.map((props, idx) => (
                            <Item
                                id={idx}
                                shownImg={shownImg}
                                seShowingImgID={seShowingImgID}
                                key={idx}
                                {...props}
                            />
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className={clsx('position-relative', styles.rightImgWrapper)}>
                        {List.map((props, idx) => (
                            <RelatedImg
                                id={idx}
                                shownImg={shownImg}
                                key={idx}
                                {...props}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
