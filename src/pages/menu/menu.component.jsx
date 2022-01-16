import React from "react";

import "./menu.styles.scss";
import { Data } from './../../data/data';
import MenuItem from './../../components/menu-item/menu-item.component';

const MenuPage = () => {
    return (
        <div className="menu">
            <div className="menuTitle">Menu</div>
            <div className="menuList">
                { Data.map((menuItem, key) => {
                    return (<MenuItem 
                        key={key} 
                        image={menuItem.image} 
                        name={menuItem.name} 
                        price={menuItem.price} 
                    />);
                })}
            </div>
        </div>
    );
}

export default MenuPage;