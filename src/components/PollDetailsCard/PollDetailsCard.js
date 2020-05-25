import React from 'react';
import { Card, CardBody, CardHeader} from "reactstrap";
import { Image, OptionDetails } from "../index";

const PollDetailsCard = props => {
    const { question, users } = props;
    const { author, optionOne, optionTwo } = question;

    return (
        <Card>
            <CardHeader>Asked by {`${users[author] ? users[author].name : ''}`}</CardHeader>
            <CardBody style={{padding: '5px'}}>
                <div className="wrapper" style={{border: 0}}>
                    <div className="avatarWrapper">
                        <Image user={`${users[author] ? users[author].id : ''}`} className="pic" />
                    </div>
                    <div className="detailsWrapper">
                        <h4>Options</h4>
                        <OptionDetails details={optionOne} users={users} />
                        <OptionDetails details={optionTwo} users={users} />
                    </div>
                </div>
            </CardBody>
            <style>{`
                .wrapper {
                    display: flex;
                    flex-direction: row;
                }
                
                .wrapper .avatarWrapper {
                    padding: 10px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .avatarWrapper .pic {
                    width: 120px;
                    height: 120px;
                    border-radius: 100%;
                    border: 6px solid #ccc;
                }
                
                .detailsWrapper {
                    flex: 3;
                    padding: 10px;
                    border-left: 1px solid #ccc;
                }

                .detailsWrapper h6 {
                    font-weight: bold;
                }
            `}</style>
        </Card>
    );
}

export default PollDetailsCard;