import { Fragment } from "react";
import Link from 'next/link';
import Image from 'next/image';

// import Header from '/components/shared/header/Header';
import Footer from '/components/shared/footer/Footer';

// import img1 from '/public/img/krugBorder.svg';
import filmine from '/public/img/filmine.jpg';
import wolfram from '/public/img/wolfram-logo.svg';
import revuto from '/public/img/revuto-logo.svg';
import plutus from '/public/img/plutus-logo.svg';
import LandingSection from "../components/landing/LandingSection";

function LandingPage() {


    const scrollToSection = (id) => {
        console.log(id);
        // event.preventDefault();
        const elem = document.getElementById(id);
        window.scrollTo({
            top: elem.offsetTop,
            behavior: 'smooth',
        })
    }


    return (
        <Fragment>
            <div id="work" className="landing-section">
                <LandingSection scrollToSection={scrollToSection} />
            </div>
            <div id="about" className="cards-wrapper pt-5">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-12 text-center">
                            <h3 className="max-width-625 mx-auto">In very competitive markets, technology can make all the difference.</h3>
                            <h6 className="max-width-625 font-weight-normal mt-4 mx-auto">Meet the technology behind unprecedented products built on Cardano</h6>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-6 d-flex flex-column pb-4 mb-1">
                            <div className="border-card">
                                <div className="border-top-left" />
                                <div className="border-bottom-right" />
                                <div className="border-element">
                                    <div className="card-header">
                                        <h5 className="font-weight-black-medium pb-3 mb-1"><span className="text-gradient">Filmine</span></h5>
                                        <p>Manage your infrastructure and supercharge your growth with collateral-free FIL borrowing</p>
                                    </div>
                                    <div className="min-height-285 mt-auto d-flex">
                                        <div className="card-background card-background--one">
                                            <div className="circle circle-one" />
                                            <div className="circle circle-two" />
                                        </div>
                                        <div className="pl-4 ml-auto ml-md-3 mt-auto d-flex">
                                            <Image src={filmine} alt="Filmine" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column pb-4 mb-1">
                            <div className="border-card">
                                <div className="border-top-left" />
                                <div className="border-bottom-right" />
                                <div className="border-element">
                                    <div className="card-header">
                                        <h5 className="font-weight-black-medium pb-3 mb-1"><span className="text-gradient">Wolfram NFT Platform</span></h5>
                                        <p>Went from idea to largest NFT marketplace on Cardano in seven weeks</p>
                                    </div>
                                    <div className="min-height-285 mt-auto d-flex align-items-center justify-content-center">
                                        <div className="card-background card-background--two">
                                            <div className="circle circle-one" />
                                            <div className="circle circle-two" />
                                        </div>
                                        <Image src={wolfram} alt="Wolfram NFT Platform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column pb-4 mb-1">
                            <div className="border-card">
                                <div className="border-top-left" />
                                <div className="border-bottom-right" />
                                <div className="border-element">
                                    <div className="card-header">
                                        <h5 className="font-weight-black-medium pb-3 mb-1"><span className="text-gradient">Revuto</span></h5>
                                        <p>Our team helped Revuto with token economics design and growth, pushing them to become the #1 App in the Cardano ecosystem</p>
                                    </div>
                                    <div className="min-height-285 mt-auto d-flex align-items-center justify-content-center">
                                        <div className="card-background card-background--three">
                                            <div className="circle circle-one" />
                                            <div className="circle circle-two" />
                                        </div>
                                        <Image src={revuto} alt="Revuto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column pb-4 mb-1">
                            <div className="border-card">
                                <div className="border-top-left" />
                                <div className="border-bottom-right" />
                                <div className="border-element">
                                    <div className="card-header">
                                        <h5 className="font-weight-black-medium pb-3 mb-1"><span className="text-gradient">Plutus</span></h5>
                                        <p>We immersed ourselves in the advanced Haskell concepts and types and became Cardano Plutus Partners</p>
                                    </div>
                                    <div className="min-height-285 mt-auto d-flex align-items-center justify-content-center">
                                        <div className="card-background card-background--four">
                                            <div className="circle circle-one" />
                                            <div className="circle circle-two" />
                                        </div>
                                        <Image src={plutus} alt="Plutus" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="bottom-dots">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-12 text-center pb-md-5">
                            <h2 className="font-weight-black-medium pb-4 mb-2"><span className="text-gradient-double d-inline-block">Scale your engineering power.</span></h2>
                            <p className="subtitle max-width-625 mx-auto pb-4 mb-5">We’d be happy to collaborate on your next Cardano-related project. We encourage you to reach out, and we can exchange ideas and share experience. </p>
                            <Link href="mailto:ops@altlabs.dev">
                                <a className="btn btn-gradient">
                                    <div className="btn-inner">
                                        <span className="text-gradient">Contact us</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-overlay">
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default LandingPage;