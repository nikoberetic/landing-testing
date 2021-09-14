import Image from 'next/image';

import logoFooter from '/public/img/logo-footer.svg';


export default function Brand() {
    return (
        <div className="logo">
            <Image src={logoFooter} alt="Logo" />
        </div>
    );
}
