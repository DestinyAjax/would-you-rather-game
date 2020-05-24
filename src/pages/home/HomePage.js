import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import { Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink,} from "reactstrap";
import { getAllQuestions } from "../../store/actions/questionAction";

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
        const { questions } = this.props;
        const { activeTab } = this.state;

        return (
            <Layout title="Home">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Card>
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
                                        <p>Hello</p>
                                    </TabPane>
                                    <TabPane tabId="2">
                                    </TabPane>
                                </TabContent>
                            </CardBody>
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
    questions: state.questions.questions
});

export default connect(mapStateTopProps)(HomePage);