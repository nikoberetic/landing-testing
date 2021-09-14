import Brand from './headerParts/Brand';
import MainNavigation from './headerParts/MainNavigation';
import {useState} from "react";

export default function Header(props) {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="navbar-wrapper">
            <div className="container-wide">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg px-lg-0">
                            <Brand />
                            <button className="navbar-toggler ml-auto" type="button" onClick={toggleMenu}>
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className={"collapse navbar-collapse " + (menu ? 'show': null)} id="navbarSupportedContent">
                                <MainNavigation scrollToSection={props.scrollToSection} />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
