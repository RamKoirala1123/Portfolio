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
                    <div className='about-project'>
                        <p>
                            Crafted with precision using Flutter and Dart, Stellar Visions is the ultimate horoscope app designed to provide you with daily, weekly, and yearly astrological guidance. Seamlessly blending intuitive design with powerful functionality, this app brings the mystique of the cosmos right to your fingertips.
                        </p>
                        <CustomButton name="Go to Project" />
                    </div>
                </div>
            </div>
            <span class="material-symbols-outlined close-btn" onClick={toggleActive}>
                close
            </span>
        </div>
    );
}

export default Singleproject
