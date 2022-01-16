import React from "react";

import "./contact.styles.scss";
import ContactImage from "../../assets/chhola.jpg";

const ContactPage = () => {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${ContactImage})` }}></div>

            <div className="rightSide">
                <h1>Contact Us</h1>
                <form action="" method="POST" id="contact-form">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" />
                    <label htmlFor="message">Email</label>
                    <textarea name="message" id="message" cols="30" rows="7" placeholder="Enter your message"></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;

