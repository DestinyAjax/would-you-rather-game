import React from "react";
import "./styles.css";

class TopNav extends React.Component {
    render() {
        return (
            <ul>
                <div className="container">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">New Question</a></li>
                    <li><a href="#contact">Leader Board</a></li>
                    <li style={{float: 'right'}}>
                        <a className="active" href="#about">Logout</a>
                    </li>
                </div>
            </ul>
        );
    }
}

export default TopNav;