import React from "react";

import "./about.styles.scss";
import AboutImage from "../../assets/dosa.jpg";

const AboutPage = () => {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis possimus nobis, nihil impedit dolorum quo modi repudiandae porro reprehenderit iusto autem, nulla illum maxime blanditiis eos veniam repellendus ducimus.</p>
            </div>
        </div>
    )
}

export default AboutPage;