import {React,useEffect} from 'react'
import "./project.css"
import CustomButton from '../Button/CustomButton'
import 'material-symbols';
import Codecard from '../Utils/CodeCard/codecard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({ isActive, toggleActive, name, about, codelink, imgsource, isweb }) => {
    const ProjectPageClass = isActive ? "project-page active" : "project-page";

    useEffect(() => {
        AOS.init({ duration: "500",});
      }, [])

    return (
        <>
            <div className={ProjectPageClass}>
                <div className="circle-blur"></div>
                <div className="circle-blur1"></div>
                <div className="circle-blur3"></div>
                <div className="left">
                    <div className="header" data-aos =  "fade-up" >
                        {name}
                        
                        <span class="material-symbols-outlined close-button" onClick={toggleActive}>
                            close
                        </span>
                    </div>
                    <div className="about">
                        <div className="second-title" data-aos =  "fade-right">
                            {'About >'}
                        </div>
                        <div className="about-content" data-aos =  "fade-up" >
                            {about}
                            {/* Crafted with precision using Flutter and Dart, Stellar Visions is the ultimate horoscope app designed to provide you with daily, weekly, and yearly astrological guidance. Seamlessly blending intuitive design with powerful functionality, this app brings the mystique of the cosmos right to your fingertips. */}
                        </div>
                    </div>
                    <div className="second-title" data-aos =  "fade-right">
                        {'Tools Used'}
                    </div>

                    <div className="language-used" data-aos = "fade-right">
                        <Codecard name="Flutter" />
                        <Codecard name="Django" />
                        <Codecard name="Rest Framework" />         
                        <Codecard name="Visual Studio Code" />
                        <Codecard name="Getx" />
                        <Codecard name="Github" />
                    </div>
                    <br />
                    <br />
                    <a href={codelink} target='_blank'>
                        <div className="button"  data-aos =  "fade-up-right">
                        <CustomButton name="Source Code"/>
                        </div>
                   
                    </a>
              
                </div>
              
                <div className="right">
                    <div className="wrap-container">
                        {isweb?null
                //        <div className="wrap-content-web">
                //        <div className="image-web">
                //            <img src={imgsource} alt='Image'/>
                //            {/* <img src="./assets/image/projecttwo.jpg" alt="Your" /> */}
                //        </div>
                //    </div>
                       :
                       
                       <div className="wrap-content-mobile" data-aos="fade-up-left">
                            <div className="image-mobile">
                                <img src={imgsource} alt='Image'/>
                                {/* <img src="./assets/image/horoscope.jpg" alt="Your" /> */}
                            </div>
                        </div>
                         }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
