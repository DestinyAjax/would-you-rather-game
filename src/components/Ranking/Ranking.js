import React from "react";
import { connect } from "react-redux";
import { Card, CardBody } from "reactstrap";
import { Image } from "../../components";

class Ranking extends React.Component {

    render() {
        const { users } = this.props;
        const allUsers = Object.keys(users).map(key => users[key]);
        const sortedUsers = allUsers.sort((a,b) => {
            const total_a = a.questions.length + Object.keys(a.answers).length;
            const total_b = b.questions.length + Object.keys(b.answers).length;
            return total_b - total_a;
        });

        return (
            <div>
                {sortedUsers && sortedUsers.map((user, index) => {
                    const answered = Object.keys(user.answers).length;
                    const created = user.questions.length;
                    const total = answered + created;

                    let ranking = <img src={require('../../assets/images/gold.png')} style={{float: 'right'}} alt="gold" />;
                    if (index === 1) ranking = <img src={require('../../assets/images/silver.png')} style={{float: 'right'}} alt="gold" />;
                    if (index === 2) ranking = <img src={require('../../assets/images/bronze.png')} style={{float: 'right'}} alt="gold" />;

                    return (
                        <Card key={user.id} style={{marginBottom: '20px'}}>
                            <CardBody style={{padding: '5px', border: '2px solid green'}}>
                                <div className="wrapper" style={{border: 0}}>
                                    <div className="avatarWrapper">
                                        <Image user={`${user.id}`} className="pic" />
                                    </div>
                                    <div className="detailsWrapper">
                                        <div>
                                            <h3>{user.name}{ranking}</h3>
                                            <p>
                                                Answered questions 
                                                <span style={{float: 'right'}}>{answered}</span>
                                            </p><hr/>
                                            <p>
                                                Created questions
                                                <span style={{float: 'right'}}>{created}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="counter">
                                        <div className="circle">
                                            {total}
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    )
                })}
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
                        width: 100px;
                        height: 100px;
                        border-radius: 100%;
                        border: 6px solid #ccc;
                    }
                    
                    .detailsWrapper {
                        flex: 3;
                        padding: 10px;
                        border-left: 1px solid #ccc;
                    }

                    .counter {
                        flex: 1;
                        padding: 10px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        border-left: 1px solid #ccc;
                    }

                    .counter .circle {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 80px;
                        height: 80px;
                        font-size: 20px;
                        font-weight: bold;
                        border-radius: 100%;
                        padding: 10px;
                        background-color: green;
                        color: #fff;
                    }

                    .detailsWrapper h6 {
                        font-weight: bold;
                    }
                `}</style>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps)(Ranking);