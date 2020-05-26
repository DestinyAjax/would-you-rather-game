import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import { Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink,} from "reactstrap";
import { getAllQuestions } from "../../store/actions/questionAction";
import { PollCard } from "../../components";

class HomePage extends React.Component {

    state = {
        activeTab: '1'
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getAllQuestions());
    };

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState(() => ({
                activeTab: tab
            }));
        };
    };

    render() {
        const { questions, loading, authUser, users } = this.props;
        const { activeTab } = this.state;
        // filter unanswered questions based on the current user votes
        const unanswered = Object.values(questions).filter(question => {
            if (!question.optionOne.votes.includes(authUser.id) && !question.optionTwo.votes.includes(authUser.id)) {
                return false;
            }
            return true;
        });

        // filter answered questions based on the current user votes
        const answered = Object.values(questions).filter(question => {
            if (question.optionOne.votes.includes(authUser.id) || question.optionTwo.votes.includes(authUser.id)) {
                return false;
            }
            return true;
        });

        // sort questions based on the timestamp
        const sortedUnanswered = unanswered.reverse().sort((a,b) => a.timestamp > b.timestamp);
        const sortedAnswered = answered.reverse().sort((a,b) => a.timestamp > b.timestamp);

        return (
            <Layout title="Home">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Card>
                            {loading ? 
                                <p className="text-center"><i className="fa fa-spinner fa-spin"></i> Loading ....</p> 
                                : (
                                <CardBody style={{padding: 0}}>
                                    <Nav className="tab-nav" tabs>
                                        <NavItem className="item">
                                            <NavLink className={`${activeTab === '1' ? 'active' : ''}`} onClick={() => this.toggle('1')}>
                                                Unanswered Questions
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="item">
                                            <NavLink className={`${activeTab === '2' ? 'active' : ''}`} onClick={() => this.toggle('2')}>
                                                Answered Questions
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab} className="tab-content">
                                        <TabPane tabId="1">
                                            {sortedUnanswered && sortedUnanswered.map(question => (
                                                <PollCard key={question.id} users={users} question={question}/>
                                            ))}
                                        </TabPane>
                                        <TabPane tabId="2">
                                            {sortedAnswered && sortedAnswered.map(question => (
                                                <PollCard type="answered" key={question.id} users={users} question={question}/>
                                            ))}
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            )}
                        </Card>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <style>{`
                    .tab-nav {
                        background-color: #fff;
                    }

                    .tab-nav .item {
                        width: 50%;
                        border-right: 1px solid #ccc;
                    }

                    .tab-nav a {
                        font-size: 16px;
                        line-height: 24px;
                        color: #222222 !important;
                        padding: 10px;
                        border: 0;
                    }

                    .tab-nav a:hover {
                        background-color: #ccc !important;
                        font-weight: bold;
                    }
    
                    .tab-nav a.active {
                        background-color: #ccc !important;
                        font-weight: bold;
                    }

                    .tab-content {
                        padding: 20px;
                    }
                `}</style>
            </Layout>
        );
    }
}

const mapStateTopProps = state => ({
    questions: state.questions.questions,
    loading: state.ui.loading,
    authUser: state.users.authUser,
    users: state.users.users
});

export default connect(mapStateTopProps)(HomePage);