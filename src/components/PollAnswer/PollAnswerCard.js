import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, CardBody, CardHeader} from "reactstrap";
import { Image, Button } from "../index";
import { saveQuestionAnswer } from "../../store/actions/questionAction";

class PollAnswerCard extends React.Component {

    state = {
        option: ""
    };

    onChangeHandler = event => {
        event.persist();
        this.setState(() => ({
            option: event.target.value
        }));
    }

    onSubmit = event => {
        event.preventDefault();
        const { option } = this.state;
        const { dispatch, auth, question } = this.props;
        const payload =  {
            authedUser: auth.id,
            qid: question.id,
            answer: option
        };
        
        dispatch(saveQuestionAnswer(payload));
    }

    render() {
        const { option } = this.state;
        const { question, users } = this.props;
        const { author, optionOne, optionTwo } = question;
        const option2 = optionTwo ? optionTwo.text : "";
        const option1 = optionOne ? optionOne.text : "";

        return (
            <Card>
                <CardHeader>
                    <span>{`${users[author] ? users[author].name : ''}`} asks:</span>
                </CardHeader>
                <CardBody style={{padding: '5px'}}>
                    <div className="wrapper" style={{border: 0}}>
                        <div className="avatarWrapper">
                            <Image user={`${users[author] ? users[author].id : ''}`} className="pic" />
                        </div>
                        <div className="detailsWrapper">
                            <div>
                                <h4>Would You Rather ... </h4>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group" style={{marginBottom: '5px'}}>
                                        <label>
                                            <input 
                                                type="radio" 
                                                checked={option === "optionOne"} 
                                                value="optionOne"
                                                onChange={this.onChangeHandler}
                                            />{" "}
                                            {option1}
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <input 
                                                type="radio" 
                                                checked={option === "optionTwo"}
                                                value="optionTwo"
                                                onChange={this.onChangeHandler}
                                            />{" "}
                                            {option2}
                                        </label>
                                    </div>
                                    <Button type="submit" title="submit" style={{width: '100%'}} />
                                </form>
                            </div>
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
}

export default connect(null)(withRouter(PollAnswerCard));