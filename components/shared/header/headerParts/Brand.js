import Image from 'next/image';
import Link from 'next/link';

import profilePic from '/public/img/logo.svg';


export default function Brand() {
    return (
        <Link href="/" className="logo">
            <a className="d-flex">
                <Image src={profilePic} alt="Logo" />
            </a>
        </Link>
    );
}
