import React from "react";
import ProgressBar from "./ProgressBar";

const OptionDetails = props => {

    const { details, users } = props;
    const allUsers = users ? Object.values(users) : [];
    const votes = details ? details.votes.length : 0;
    const percentage = (votes / allUsers.length) * 100;

    return (
        <div className="box">
            <div>
                <p>{`${details ? details.text : ''}`}</p>
                <ProgressBar percentage={percentage} />
                <p className="text-center p">
                    {`${votes} out of ${allUsers ? allUsers.length : 0} votes`}
                </p>
            </div>
            <style>{`
                .box {
                    padding: 10px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }

                .p {
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
}

export default OptionDetails;