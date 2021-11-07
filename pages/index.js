import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import LandingSchedule from "../components/LandingSchedule";
import LandingSpeakers from "../components/LandingSpeakers";
import Footer from "../components/shared/footer/Footer";


import img1 from '/public/img/top-img.svg';

export default function Home() {
    return (
        <>
            <div className="container py-5">
                <div className="row align-items-center py-md-5">
                    <div className="col-md-6 pb-5 pb-md-0">
                        <h1 className="mb-4"><span className="text-gradient-yellow">NFT conference</span></h1>
                        <h4 className="text-blue-light font-weight-normal mb-5 pb-2">Join us on November 12th from 9am CET for a special event on minting and storing NFTs based on Filecoin. </h4>
                        <Link href="#">
                            <a className="btn-no-style">
                                <div className="btn btn-gradient">
                                    <div className="btn-inner">
                                        <span className="text-gradient">BUY TICKETS</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Image src={img1} alt="" />
                    </div>
                </div>
            </div>
            <LandingSchedule />
            <LandingSpeakers />
            <Footer />
        </>
    )
}
