import Navigation from './parts/Navigation';
import Image from "next/image";
import Link from 'next/link';
import {useState} from "react";

import logo from '../../../../public/img/logo.svg';
import hamburger from '../../../../public/img/jam_menu.svg';

export default function Header({...props}) {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="navbar-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg px-lg-0">
                            <Link href="/" className="logo">
                                <a className="d-flex">
                                    <Image src={logo} alt="Logo" />
                                </a>
                            </Link>
                            <button className="navbar-toggler ml-auto" type="button" onClick={toggleMenu}>
                                <Image src={ hamburger } alt="" />
                            </button>
                            <Navigation
                                showVerification={props.showVerification}
                                toggleModalVerify={props.toggleModalVerify}
                            />
                            {/*<div className={"collapse navbar-collapse " + (menu ? 'show': null)}>*/}
                            {/*    <Navigation />*/}
                            {/*</div>*/}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
