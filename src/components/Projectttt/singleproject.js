import { React, useState } from 'react';
import './singleproject.css'
import CustomButton from '../Button/CustomButton';
import 'material-symbols';

const Singleproject = ({ isActive, toggleActive }) => {

    const singleProjectPageClass = isActive ? "singleprojectpage active" : "singleprojectpage";
    return (
        <div className={singleProjectPageClass}>
            <div className="app-container">
                <div className="left-section">
                    <div className="wrap">
                        <div className="content-wrap">
                            <div className="image-container">
                                <img src="./assets/image/projecttwo.jpg" alt="Your" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <span class="material-symbols-outlined close-btn" onClick={toggleActive}>
                        close
                    </span>
                    <div className='about-project'>
                        <p className='about'>
                            <div className="second-title">
                                About {">"}
                            </div>
                            Crafted with precision using Flutter and Dart, Stellar Visions is the ultimate horoscope app designed to provide you with daily, weekly, and yearly astrological guidance. Seamlessly blending intuitive design with powerful functionality, this app brings the mystique of the cosmos right to your fingertips.
                        </p>
                        <div className="second-title">
                            Language Used {">"}
                        </div>
                        <span className='language'>Flutter</span>
                        <span className='language'>Django</span>
                        <span className='language'>Rest Framework</span>
                        <span className='language'>Getx</span>
                        <br />
                        <br />
                        <br />
                        <CustomButton name="Source Code" />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Singleproject
