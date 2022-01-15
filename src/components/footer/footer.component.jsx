import React from "react";

import './footer.styles.scss';
import {Facebook, Instagram, LinkedIn, Twitter} from '@mui/icons-material'

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Instagram />
                <Twitter />
                <Facebook />
                <LinkedIn />
            </div>
            <p>&copy; 2022 - PeruviaFood.com</p>
        </div>
    );
}

export default Footer;