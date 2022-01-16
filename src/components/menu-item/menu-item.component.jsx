import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({image, name, price}) => {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1 className="name">{ name }</h1>
            <p>$ { price }</p>
        </div>
    );
}

export default MenuItem;