import React from "react";
import PropTypes from "prop-types";
import TopNav from "./TopNav/TopNav";

class Layout extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <TopNav active={this.props.title}/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;