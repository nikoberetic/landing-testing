import Link from 'next/link';
import ActiveLink from "../../../../helpers/ActiveLink";


export default function MainNavigation(props) {
    return (
        <div className="navigation ml-auto">
            <ul className="navbar-nav menu-items">
                <li className="nav-item">
                    <button type="button" className="nav-link" onClick={() => props.scrollToSection('work')}>Work</button>
                </li>
                <li className="nav-item">
                    {/*<ActiveLink href="#about" activeClassName="active"><a className="nav-link" onClick={(e) => props.scrollToSection(e)}>About</a></ActiveLink>*/}
                    <button type="button" className="nav-link" onClick={() => props.scrollToSection('about')}>About</button>
                </li>
                <li className="nav-item">
                    <button type="button" className="nav-link" onClick={() => props.scrollToSection('contact')}>Contact</button>
                </li>
            </ul>
        </div>
    );
}
