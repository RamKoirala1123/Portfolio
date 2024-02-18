import React, { useEffect, useRef } from 'react';
import './card.css';
import CustomButton from '../Button/CustomButton';
import Singleproject from '../Projectttt/singleproject'; // Import the Singleproject component


const THRESHOLD = 10;

function Card({ title, content, backgroundImage, view }) {
    const height = view === 'mobile' ? 350 : 150;
    const width = view === 'mobile' ? 150 : 350;

    const cardRef = useRef(null);

    // useEffect(() => {
    //     console.log(backgroundImage);
    //     // const card = document.querySelector(".card");
    //     const card = cardRef.current;
    //     const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");

    //     function handleHover(e) {
    //         const { clientX, clientY, currentTarget } = e;
    //         const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    //         const horizontal = (clientX - offsetLeft) / clientWidth;
    //         const vertical = (clientY - offsetTop) / clientHeight;
    //         const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    //         const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    //         card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    //     }

    //     function resetStyles(e) {
    //         card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    //     }

    //     if (!motionMatchMedia.matches) {
    //         card.addEventListener("mousemove", handleHover);
    //         card.addEventListener("mouseleave", resetStyles);
    //     }

    //     return () => {
    //         card.removeEventListener("mousemove", handleHover);
    //         card.removeEventListener("mouseleave", resetStyles);
    //     };
    // }, []);

    const cardStyle = {
        height: height,
        width: width,
        background: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        margin: 'auto',
        padding: '40px',
        color: '#fff',
        transition: 'transform 0.1s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative',

    }

    return (
        <>
            <article ref={cardRef} className="card" style={cardStyle}>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    {/* <CustomButton name="View"/> */}
                    {/* <button type="button">View</button> */}
                </div>
            </article>
        </>
    );
}

export default Card;
