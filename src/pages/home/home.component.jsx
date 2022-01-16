import React from "react";
import { Link } from 'react-router-dom';

import './home.styles.scss';
import Banner from "../../assets/food.jpeg";


const HomePage = () => {
    return(
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
            <div className="headerContainer">
                <h1>Food Corner</h1>
                <p>PERUVIAN FOOD AT A CLICK.</p>

                <Link to="/menu">
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;