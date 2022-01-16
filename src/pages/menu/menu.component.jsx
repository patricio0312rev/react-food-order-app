import React from "react";

import "./menu.styles.scss";
import { Data } from './../../data/data';

const MenuPage = () => {
    return (
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    { Data.map((menuItem, key) => {
                        return <div>{menuItem.price}</div>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default MenuPage;