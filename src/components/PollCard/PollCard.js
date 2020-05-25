import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardHeader} from "reactstrap";
import { Button, Image } from "../index";

const PollCard = props => {
    const { question, users } = props;
    const author = users[question.author];
    const router = useHistory();

    return (
        <div style={{marginBottom: '10px'}}>
            <Card>
                <CardHeader>
                    <h6 className="text-center">{author.name} ask:</h6>
                </CardHeader>
                <CardBody>
                    <div className="pollWrapper">
                        <div className="avatarWrapper">
                            <Image user={author.id} className="pic" />
                        </div>
                        <div className="detailsWrapper">
                            <h6>Would you rather</h6>
                            <p>{question.optionOne.text}</p>
                            <Button 
                                type="button" 
                                className="btn btn-md btn-outline-success" 
                                title="View Poll" 
                                style={{width: '100%'}}
                                onClick={() => router.push(`/question/${question.id}`)}
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
            <style>{`
                .pollWrapper {
                    display: flex;
                    flex-direction: row;
                }

                .avatarWrapper {
                    flex: 1;
                    padding: 10px;
                    border-right: 1px solid #ccc;
                }

                .avatarWrapper .pic {
                    width: 100px;
                    height: 100px;
                    border-radius: 100%;
                    border: 6px solid #ccc;
                }

                .detailsWrapper {
                    flex: 3;
                    padding: 10px;
                }

                .detailsWrapper h6 {
                    font-weight: bold;
                }
            `}</style>
        </div>
        
    );
}

PollCard.propTypes = {
    question: PropTypes.object.isRequired
};

export default PollCard;