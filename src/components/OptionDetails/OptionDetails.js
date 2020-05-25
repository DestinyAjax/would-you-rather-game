import React from "react";
import ProgressBar from "./ProgressBar";

const OptionDetails = props => {

    const round = (value, precision) => {
        let multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    };

    const { details, users } = props;
    const allUsers = users ? Object.values(users) : [];

    return (
        <div className="box">
            <div>
                <p>{`${details ? details.text : ''}`}</p>
                <ProgressBar />
                <p className="text-center p">
                    {`${details ? details.votes.length : 0} out of ${allUsers ? allUsers.length : 0} votes`}
                </p>
            </div>
            <style>{`
                .box {
                    padding: 10px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                }

                .p {
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
}

export default OptionDetails;