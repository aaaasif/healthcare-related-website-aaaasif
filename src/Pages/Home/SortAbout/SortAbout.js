import React from 'react';
import "./SortAbout.css"
import aboutLogo from "../../../Images/about-img.svg"

const SortAbout = () => {
    return (
        <div className="d-flex justify-content-around align-items-center about-banner">
            <div>
                <img className="w-100" src={aboutLogo} alt="painai" />
            </div>
            <div>
                <h1>We Take Care Of Your Healthy Life</h1>
                <p>We always try to help you for your healthy life.</p>
                <button className="common-button">Learn More</button>
            </div>
        </div>
    );
};

export default SortAbout;