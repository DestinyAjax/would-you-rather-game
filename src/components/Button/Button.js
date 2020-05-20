import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Button = props => {
    const { title, onClickHandler } = props;

    return (
        <button onClick={onClickHandler} className="btn btn-md btn-primary" {...props}>
            {title}
        </button>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired
};

export default Button;