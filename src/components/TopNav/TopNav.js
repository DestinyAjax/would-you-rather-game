import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class TopNav extends React.Component {
    render() {
        const { active } = this.props;

        return (
            <ul>
                <div className="container">
                    <li>
                        <Link to="/home" className={`${active === 'Home' ? 'active' : ''}`}>Home</Link>
                    </li>
                    <li>
                        <Link to="/add" className={`${active === 'Add' ? 'active' : ''}`}>New Question</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard" className={`${active === 'Leaderboard' ? 'active' : ''}`}>Leader Board</Link>
                    </li>
                    <li style={{float: 'right'}}>
                        <a className="active" href="#about">Logout</a>
                    </li>
                </div>
            </ul>
        );
    }
}

export default TopNav;