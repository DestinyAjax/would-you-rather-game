import React from 'react';
import { connect } from "react-redux";
import { Card, CardBody, CardHeader} from "reactstrap";
import { Image, OptionDetails } from "../index";

class PollDetailsCard extends React.Component {

    render() {
        const { pollDetails, users, authUser } = this.props;
        const { author, optionOne, optionTwo } = pollDetails;

        return (
            <Card>
                <CardHeader>
                    <span><strong>Asked by {`${users[author] ? users[author].name : ''}`}</strong></span>
                </CardHeader>
                <CardBody style={{padding: '5px'}}>
                    <div className="wrapper" style={{border: 0}}>
                        <div className="avatarWrapper">
                            <Image user={`${users[author] ? users[author].id : ''}`} className="pic" />
                        </div>
                        <div className="detailsWrapper">
                            <div>
                                <h4>Options</h4>
                                <OptionDetails auth={authUser} details={optionOne} users={users} />
                                <OptionDetails auth={authUser} details={optionTwo} users={users} />
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

const mapStateToProps = state => ({
    authUser: state.users.authUser,
    users: state.users.users,
    pollDetails: state.questions.pollDetails,
});

export default connect(mapStateToProps)(PollDetailsCard);