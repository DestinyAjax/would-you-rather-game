import React from "react";
import Layout from "../../components/Layout";
import { Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink,} from "reactstrap";

class HomePage extends React.Component {
    render() {
        return (
            <Layout title="Home">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Card>
                            <CardBody>
                                <Nav className="tab-nav" tabs>
                                    <NavItem className="item">
                                        <NavLink onClick={() => {}}>
                                            Unanswered Questions
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="item">
                                        <NavLink onClick={() => {}}>
                                            Answered Questions
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent  className="tab-content">
                                    <TabPane tabId="1">
                                    </TabPane>
                                    <TabPane tabId="2">
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

export default HomePage;