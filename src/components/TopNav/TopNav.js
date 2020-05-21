import React from "react";
import "./styles.css";

const TopNav = props => {
    return (
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li style={{float: 'right'}}><a className="active" href="#about">About</a></li>
        </ul>
    )
}

export default TopNav;