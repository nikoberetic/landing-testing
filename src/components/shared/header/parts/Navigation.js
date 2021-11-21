import Link from 'next/link';


export default function Navigation() {
    return (
        <>
            {/*<div className="navigation ml-auto">*/}
            {/*    <ul className="navbar-nav menu-items">*/}
            {/*        <li className="nav-item">*/}
            {/*            <Link href="/">*/}
            {/*                <a className="nav-link">Home</a>*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*        <li className="nav-item">*/}
            {/*            <Link href="/search">*/}
            {/*                <a className="nav-link">Search</a>*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div className="ml-auto d-flex">
                <button type="button" className="btn btn-purple mr-3">Authenticate</button>
                {/*<button type="button" className="btn btn-white ml-2">Log in</button>*/}
            </div>
        </>
    );
}
