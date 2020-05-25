import React from "react";

const ProgressBar = props => {
    return (
        <div className="bar">
            <div className="progressBar"></div>
            <style>{`
                .bar {
                    background-color: #ccc;
                    width: 100%;
                    height: 30px;
                    border-radius: 5px;
                    margin-top: 10px;
                    margin-bottom: 20px;
                }

                .progressBar {

                }
            `}</style>
        </div>
    );
}

export default ProgressBar;