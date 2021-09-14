import Brand from "./footerParts/Brand";
import Link from "next/link";
import Image from "next/image";

import linkedinGray from '/public/img/link_gray.svg';
import linkedinColor from '/public/img/link_colour.svg';
import instagramGray from '/public/img/ig_gray.svg';
import instagramColor from '/public/img/ig_colour.svg';
import twitterGray from '/public/img/twitter_gray.svg';
import twitterColor from '/public/img/twitter_colour.svg';


export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 mb-5 mb-md-0">
                        <Brand />
                    </div>
                    <div className="col-6 col-md-2 d-flex">
                        <div className="footer-widget-two">
                            <h5 className="mb-0">Contact</h5>
                        </div>
                    </div>
                    <div className="col-6 col-md-2 d-flex">
                        <div className="footer-widget-three">
                            <h5 className="mb-0">Follow us</h5>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 align-items-center">
                    <div className="col-md-8 order-2 order-md-0 mt-5 mt-md-0">
                        <p className="copyright">© 2021 Alt Labs. All rights reserved.</p>
                    </div>
                    <div className="col-6 col-md-2 d-flex order-0 order-md-1">
                        <div className="footer-widget-two">
                            <Link href="mailto:ops@altlabs.dev"><a className="footer-link">ops@altlabs.dev</a></Link>
                        </div>
                    </div>
                    <div className="col-6 col-md-2 d-flex order-1 order-md-2">
                        <div className="footer-widget-three">
                            <Link href="https://www.linkedin.com/company/alt-laboratories">
                                <a className="mr-2">
                                    <div className="change-image-hover d-flex">
                                        <Image src={linkedinGray} alt="Linkedin" />
                                        <Image src={linkedinColor} alt="Linkedin" />
                                    </div>
                                </a>
                            </Link>
                            <Link href="https://twitter.com/altlaboratories">
                                <a target="_blank" className="mr-2">
                                    <div className="change-image-hover d-flex">
                                        <Image src={twitterGray} alt="Twitter" />
                                        <Image src={twitterColor} alt="Twitter" />
                                    </div>
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <div className="change-image-hover d-flex">
                                        <Image src={instagramGray} alt="Instagram" />
                                        <Image src={instagramColor} alt="Instagram" />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
