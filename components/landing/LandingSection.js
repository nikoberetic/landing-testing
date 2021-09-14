import Link from "next/link";
import Image from "next/image";
import { Parallax } from 'react-scroll-parallax';
import Header from "../shared/header/Header";
import img1 from "../../public/img/circleLines.svg";
import img2 from "../../public/img/krugBorder.svg";


const LandingSection = (props) => {

    return (
        <>
            <div className="header-overlay">
                <Header scrollToSection={props.scrollToSection} />
            </div>
            <div className="container-fluid d-flex flex-grow-1 pt-5 pt-lg-0">
                <div className="row flex-grow-1 pt-5 pt-lg-0">
                    <div className="col-lg-5 d-flex align-items-center">
                        <h1 className="font-weight-normal">A software innovation lab building mission critical software.</h1>
                    </div>
                </div>
            </div>
            <div className="parallax-wrapper">
                <div className="parallax-inner">
                    <Parallax className="color-circle" y={[50, -50]} tagOuter="figure">
                        <Image src={img1} alt="" />
                    </Parallax>
                    <Parallax className="color-ring" y={[100, -100]} tagOuter="figure">
                        <Image src={img2} alt="" />
                    </Parallax>
                </div>
            </div>
        </>
    );
}

export default LandingSection;
