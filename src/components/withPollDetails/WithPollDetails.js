import React from "react";
import { PollAnswerCard, PollDetailsCard } from "../index";

const WithPollDetails = props => {
    return (
        <PollAnswerCard {...props} />
    );
}

export default WithPollDetails;